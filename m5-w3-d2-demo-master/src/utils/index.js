export const getLabels = (label) => {
    switch (label) {
        case 'Update List':
            return {
                buttonTitle: 'Update',
                actionLabel: 'Update',
            }
        case 'Delete List':
            return {
                buttonTitle: 'Delete',
                actionLabel: 'Delete',
            }
        case 'Add Book':
            return {
                buttonTitle: 'Add Book',
                actionLabel: 'Create',
            }
    }
}