import React from 'react'

const HomePage = ( props ) => {
  return (
    <div>
      <h1>{props.username}</h1>
      <p>{props.desc}</p>
    </div>
  )
}



export default HomePage


export const getServerSideProps = async () => {
  return {
    props: {
      username: 'Junaid',
      desc: 'ewerw erwerwer werwerwer wer wer eriwerkjlwer weirwe rniwjer  ojweklrwer wnerwer erwerwer werwerwer werwerwer efrgfeg3fgg rgrgfwefgg werwefwee werfwerwer etrhojsldf'
    }
  }
}