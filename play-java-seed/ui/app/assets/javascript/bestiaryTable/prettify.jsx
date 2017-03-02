// Make the label look pretty
export default function prettify(label) {
    return label.split(/([A-Z]+[^A-Z]*)/).
                 join(' ').
                 replace('_', ' ')

}
