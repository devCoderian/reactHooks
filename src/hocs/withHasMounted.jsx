import React from 'react';

export default function withHasMounted(Component){
    
    class NewComponent extends React.Component{

        state = {
            hasMounted: false, 
        }
        render(){
            const { hasMounted } = this.state;
            return <Component {...this.props} hasMounted={hasMounted}/>
        }
        //최초의 렌더가 끝났을 때 true로 바뀌는 로직
        componentDidMount(){
            this.setState({ hasMounted : true });
        }
    }

    NewComponent.displayName = `withHasMounted(${Component.name})`;

    return NewComponent;
}