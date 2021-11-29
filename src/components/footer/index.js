const Footer = () =>{
  const year = new Date().getFullYear()
  return(
    <div className="bg-primary m-0 pb-2 pt-5 text-white text-center">
      <small>All rights reserved {year}&#xA9;</small>
    </div>
  )
};
export default Footer;