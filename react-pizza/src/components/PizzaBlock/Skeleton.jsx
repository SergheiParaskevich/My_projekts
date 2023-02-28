import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    
  >
    <circle cx="114" cy="115" r="111" /> 
    <rect x="19" y="232" rx="7" ry="7" width="201" height="22" /> 
    <rect x="NaN" y="NaN" rx="0" ry="0" width="NaN" height="NaN" /> 
    <rect x="21" y="262" rx="7" ry="7" width="191" height="72" /> 
    <rect x="23" y="338" rx="7" ry="7" width="77" height="35" /> 
    <rect x="113" y="345" rx="27" ry="27" width="95" height="43" />
  </ContentLoader>
)

export default MyLoader
