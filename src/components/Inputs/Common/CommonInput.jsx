const CommonInput = props => {
  const {
    value,
    type,
    disabled,
    styles
  } = props

  return (
    <input 
      value={value} 
      type={type} 
      disabled={disabled}
      className={styles}
    />
  )
}

export default CommonInput