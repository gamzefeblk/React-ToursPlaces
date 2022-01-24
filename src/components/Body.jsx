import React,{ useState } from 'react'
import { BodyContainer, Title, Card, data,Image,GridContainer,Div } from "./Style"
import { Img } from 'react-image';
import styles from "./Body.module.css"


export default function body() {
    return (
        <BodyContainer>
            <Title >
                Popular Tour Places
            </Title>
            <GridContainer >
            
            {
                data.map((element) => (
                    <Card>
                        <Title header key={element.id}>{element.title}</Title>
                        <Image> 
                        <img className={styles.image} style={{width:"100%",height:"40vh",borderRadius:"5px"}} src={element.image}/>
                        <Div className={styles.hide}>{element.desc}
                        </Div>
                        </Image>
                        
                    </Card>
                ))
            }
              </GridContainer>
        </BodyContainer>
    )
}
