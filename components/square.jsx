export default function Square(props){
    return(
        <div style={{
            backgroundColor:props.color,
            width:props.dimensao,
            height:props.dimensao,
            margin:4,
            textAlign:'center',
            }}>
            {props.children}
        </div>
    )
}
