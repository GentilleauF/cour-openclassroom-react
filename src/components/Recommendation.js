const Recommendations = () => {
    const currentMonth = new Date().getMonth
    const isSpring = currentMonth<=2 && currentMonth>=5;

    return ( 
        <div>
        {isSpring ? "C'est le moment de rempoter" : "Ce n'est pas encore le printemps"}

        </div>
     );
}
 
export default Recommendations;