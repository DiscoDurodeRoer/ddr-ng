export const MODES_BUTTON = {
    DEFAULT: 'default',
    SAVE: 'save',
    DANGER: 'danger',
    DISABLED: 'disabled'
} as const;

export const TYPE_BUTTON = {
    BUTTON: 'button',
    SUBMIT: 'submit'
} as const;

export const TOAST = {
    STATUS_INFO: 'info',
    STATUS_WARNING: 'warning',
    STATUS_ERROR: 'danger',
    STATUS_SUCCESS: 'success',
    TIMEOUT_DEFAULT: 5000,
    MAX_TOAST: 4
} as const;

export const ORIENTATION = {
    TOP_LEFT: 'top-left',
    TOP_RIGHT: 'top-right',
    TOP_CENTER: 'top-center',
    BOTTOM_LEFT: 'bottom-left',
    BOTTOM_RIGHT: 'bottom-right',
    BOTTOM_CENTER: 'bottom-center',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
} as const;

export const MODAL = {
    CONFIRM: 'confirm',
    INFO: 'info',
    NO_BUTTONS: 'no-buttons'
} as const;

export const SELECTION_MODE_CALENDAR = {
    SINGLE: 'single',
    MULTIPLE: 'multiple',
    RANGE: 'range'
} as const;

export const TYPE_INPUT = {
    TEXT: 'text',
    DATE: 'date',
    EMAIL: 'email',
    PHONE: 'phone',
    NUMBER: 'number',
    URL: 'url',
    PASSWORD: 'password'
} as const;

export const RESOLUTIONS = {
    MOBILE: 'mobile',
    TABLET: 'tablet',
    WEB: 'web',
    MOBILE_MIN: 0,
    MOBILE_MAX: 568,
    TABLET_MIN: 568,
    TABLET_MAX: 992,
    WEB_MIN: 992,
    WEB_MAX: 9999
} as const;

export const SIZE = {
    LARGE: 'large',
    MEDIUM: 'medium',
    SMALL: 'small',
    EXTRA_SMALL: 'xs-small'
} as const;

export const ORIENTATION_DROPDOWN = {
    TOP: 'top',
    BOTTOM: 'bottom'
} as const;

export const INPUT_ERRORS = {
    NEUTRAL: 0,
    ERROR: 1,
    VALID: 2
} as const;

export const THEME = {
    BLUE: 'ddr-blue',
    DARK: 'ddr-dark',
    PURPLE: 'ddr-purple'
} as const;

export const THEMES = [
    THEME.BLUE,
    THEME.DARK,
    THEME.PURPLE
] as const;

export const BADGE = {
    INFO: 'info',
    WARNING: 'warning',
    DANGER: 'danger',
    SUCCESS: 'success'
} as const;

export const SKELETON = {
    CARD: 'card',
    LIST: 'list',
    GRAPHIC: 'graphic'
} as const;

export const MODE_SORT = {
    NO_SORT: '-',
    ASCENDING: 'ascending',
    DESCENDING: 'descending'
} as const;