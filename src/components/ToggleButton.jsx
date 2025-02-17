export function ToggleButton({ enable, setEnable }) {
    return (
        <button onClick={() => setEnable(!enable)}>
            {enable ? 'Desactivar' : 'Activar'} seguimiento
        </button>
    )
}
