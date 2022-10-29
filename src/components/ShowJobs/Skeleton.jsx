import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={1196}
      height={310}
      viewBox="0 0 1196 310"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="11" y="148" rx="10" ry="10" width="200" height="34" />
      <rect x="12" y="194" rx="10" ry="10" width="200" height="32" />
      <rect x="11" y="241" rx="10" ry="10" width="200" height="31" />
      <rect x="475" y="4" rx="10" ry="10" width="972" height="262" />
      <rect x="12" y="2" rx="10" ry="10" width="272" height="126" />
    </ContentLoader>
  )
}

export default Skeleton
