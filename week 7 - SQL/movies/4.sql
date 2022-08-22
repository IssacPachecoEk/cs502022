SELECT COUNT(movies.id)
join ratings on movies.id=ratings.movie_id 
and ratings.rating=10;
