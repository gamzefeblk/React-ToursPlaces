import React from 'react'
import { HeaderContent,List,Li } from './Style'

const Header = (props) => {

    return (
        <HeaderContent>
            <List >
                    {
                        props.content.map((element,index) => (
                            <Li key={index}>{element}</Li>
                        ))
                    }
                </List>
        </HeaderContent>
    )
}

export default Header