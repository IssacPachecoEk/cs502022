SELECT AVG(rating)
FROM ratings 
JOIN movies ON movies.id = ratings.movies_id
WHERE movies.year = 2012;
