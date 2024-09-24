const Total = ({parts}) => {
    const total = parts.reduce((acc, part) => acc + part.exercises, 0);
    return (
      <div>
        <p>Number of exercises {total}</p>
      </div>
    )
}
  
export default Total