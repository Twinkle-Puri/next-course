import HeaderStyle from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      {/* <h1 className="title">
        <span>WEBDEV</span> News
      </h1> */}
      <h1 className={HeaderStyle.title}>
        <span>webdev</span>course
      </h1>
      <p className={HeaderStyle.description}>
        Keep up to date 
      </p>
      <style jsx>{
        `
        .title{
            color:red;
        }
        `
      }
      </style>
    </div>
  )
}

export default Header
