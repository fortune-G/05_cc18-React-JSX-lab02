// console.log(React)
// console.log(ReactDOM) 

function Apple(){
    const st1 = {color: 'whitesmoke'}
    const st2 = {display : 'block',alignItems:'center',justifyContert:'space-between'} 
    const st3 ={ color: '#EBECF0' }
    const st4 = {backgroundColor:'#343A46',border : '1px solid #343A46',borderRadius: '10px',paddingLeft : '25px',height : '200px',justifyItem:'center'}
    const st5 = {backgroundColor:'#343A46',color: 'whitesmoke'}
    const st6 = {backgroundColor:'#343A46',color: 'grey',fontSize : '0.9em'}
    return <div style={st2}>
            <h1 style={st1}>Quick Start</h1>
            <h3 style={st3}>Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.</h3>
            <div style = {st4}>
                <h3 style={st5}>You will learn</h3>
                <ul style = {st6}>
                    <li style = {st6}>How to create and nest components</li>
                    <li style = {st6}>How to add markup and styles</li>
                    <li style = {st6}>How to display data</li>
                    <li style = {st6}>How to render conditions and lists</li>
                    <li style = {st6}>How to respond to events and update the screen</li>
                    <li style = {st6}>How to share data between components</li>
                </ul>
            </div>
    </div>
    
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
// root.render(<h1> Codecamp18 : {new Date().toDateString()}</h1>) //1
root.render(<Apple />);     //2 สามารถใช้แบบ 1 || 2 ก็ได้