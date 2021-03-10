import React from "react";

const footerStyle = {
  border: '1px solid black'
};

export default function footer(){
  
  return(
    <>
      <footer 
        class="geral_footer"
        style={footerStyle}
        >Desenvolvido por Felipe Tiburcio(felipe.tiburcio@gmail.com)
      </footer>
    </>
  )
}