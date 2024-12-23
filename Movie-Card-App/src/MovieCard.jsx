function MovieCard({title, genre, poster, isPopular}){
    return(
        <div className="movie-card">
            <img className="movie-poster" src={poster} alt={title} />
            <h2>{title}</h2>
            <p>{genre}</p>
            {isPopular ? (
        <p style={{ color: 'gold', fontWeight: 'bold' }}>Popular</p>
      ) : (
        <p style={{ color: 'gray' }}>Not Popular</p>
      )}
        </div>
    )
}
export default MovieCard