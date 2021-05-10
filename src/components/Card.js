import  React from  'react'
import e1Img from '../Images/E1.png'
import circleImg from '../Images/circles.png'
import './Styles/Card.css'

class Card extends React.Component {
     /*constructor(props){
     super(props)
     this.state = {
         image: 'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/bulbasaur.png?alt=media&token=567caf19-af47-414e-a9d4-3854ab24c7dc'
     }

     }
     componentDidMount(){
        setTimeout(() => {
            this.setState({
                image:"https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06"
            })
        },5000)
     }*/
     
    render (){
        const {title,description,img,leftColor,rightColor} = this.props
        return (
            <div className="card mx-auto Fitness-Card"
                style={{
                        //backgrounImage:`url(${circleImg}), linear-gradient(to right, #A74CF2, #617BFB)`
                        backgroundImage: `url(${circleImg}), linear-gradient(to right, ${leftColor}, ${rightColor})`
                }}>
                <div className="card-body">
                    <div className="row center">   
                        <div className="col6">
                            <img src={img} className="float-right" alt="exercise"/>
                        </div>

                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p> {description}</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
      
}

export default Card 