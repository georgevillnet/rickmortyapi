function Logo1(props) {
    const contenedorLogo = {
        height: props.largo,
        marginTop: props.margentop,
        backgroundColor: 'white',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
    const estiloLogo = {
        width: '300px',
        height: '85px',
    };
    return (
        <div style={contenedorLogo} className='cajalogo1'>
            <img style={estiloLogo} src="/img/logo.PNG" alt="Logotipo" />
        </div>
    );
}
export default Logo1