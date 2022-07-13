export const devices = [
    { label: '3 Devices, 1 Year', value: '35.99' },
    { label: '1 Device, 1 Year', value: '27.99' },
    { label: '1 Device, 2 Years', value: '43.99' },
    { label: '3 Devices, 2 Years', value: '63.99' },
    { label: '5 Devices, 1 Year', value: '53.99' },
    { label: '5 Devices, 2 Years', value: '71.99' },
]

export const customStyles = {
    option: (styles, state) => ({
        ...styles,
        color: '#1D1D1B',
        padding: '10px',
        marginTop: '10px',
        fontSize: '14px',
        fontWeight: '400',
        backgroundColor: "#23D1AE",
        "&:hover": {
            backgroundColor: "#7FE3CE"
        },
        "&:checked": {
            backgroundColor: "#7FE3CE"
        }
    }),
    control: (styles, state) => {
        const style = {
        ...styles,
        backgroundColor: '#23D1AE',
            borderRadius: 'none',
            boxShadow: 'none',
        border: 'solid 2px #1D1D1B',
        outline: 'none',
        fontSize: '14px',
        fontWeight: '400',
        "&:hover": {
            borderColor: "#1D1D1B",
            outline: 'none'
            }

        }
        if (state.menuIsOpen && state.menuPlacement === 'top') {
            style.borderTop = 'none'
        }
        return style;

    },
    indicatorSeparator: styles => ({
        ...styles,
        display: 'none'
    }),
    dropdownIndicator: styles => ({
        ...styles,
        color: '#1D1D1B',
    }),
    menu: (styles, state) => ({
        ...styles,
        backgroundColor: '#23D1AE',
        border: 'solid 2px #1D1D1B',
        borderRadius: 'none',
        margin: 0,
        boxShadow: 'none',
        borderBottom: state.menuIsOpen && state.menuPlacement === 'top' ? '#1D1D1B' : 'none'
    }),
}