import os
import json

CORE_DIR = 'docs/core'

DOC_DIRS = frozenset({
    CORE_DIR,
})


def docs_files(directory):
    return [(file_dir, files) for file_dir, _, files in os.walk(directory)
            if any('.json' in file for file in files)]


def document_component(component_json):
    name, description = component_json['description'].split(' | ')
    props = component_json['props']
    methods = component_json['methods']

    component_md = '# {name}\n\n{description}\n\n'.format(name=name, description=description)

    component_md += '## Props\n|Prop|Type|Description|\n|----|----|-----------|\n'
    for prop in sorted(props.keys()):
        prop_args = props[prop]
        component_md += '`{name}`|`{prop_type}`|{description}|\n'.format(
            name=prop,
            prop_type=prop_args['flowType']['name'],
            description=prop_args['description'].replace(' *', ''))

    component_md += '\n\n## Methods\n'
    for method in methods:
        component_md += '### {name}\n{description}\n'.format(
            name=method['name'],
            description=method['description'] if 'description' in method else '')

        if len(method['params']) > 0:
            component_md += '|Argument|Type|Description|\n|--|--|--|\n'

            for param in method['params']:
                # print(param)
                pass
            component_md += '\n'

        returns = method['returns']['type']
        # print(returns)
        component_md += '#### Returns\n{}\n```js\n{}\n```\n'.format(
            returns['name'],
            returns['raw'] if 'raw' in returns else '') if returns['name'] != 'void' else '\n'

    with open('docs/core/_sdplot.md', 'w') as f:
        f.write(component_md)

def main():
    while os.getcwd()[-8:] == '/scripts':
        os.chdir('..')

    for doc_dir in DOC_DIRS:
        for folder, files in docs_files(doc_dir):
            for file in [f for f in files if f[-5:] == '.json']:
                with open(os.path.join(folder, file), 'r') as f:
                    if file == '_sdplot.json':
                        document_component(json.load(f))
                    else:
                        continue


if __name__ == '__main__':
    main()
