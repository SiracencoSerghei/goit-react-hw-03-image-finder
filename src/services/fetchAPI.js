const pixabayKey = '34315621-6b18059d5a6be575efaf0d130';

const fetchImagesWithQuery = (searchQuery, page=1) => {

    return fetch(`https://pixabay.com/api/?q=${searchQuery}&key=${pixabayKey}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`)
            .then(res => res.json())
            .then(data => data.hits);

}

export default fetchImagesWithQuery;