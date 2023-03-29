/**
 * Add application required validations here
 */

export const isNullOrEmpty = (input) => {
    if (input === ' ') {
        return true;
    } else if (input === null) {
        return true;
    } else if (input === undefined) {
        return true;
    } else if (input.toString().trim().length === 0) {
        return true;
    } else {
        return false;
    }
}
