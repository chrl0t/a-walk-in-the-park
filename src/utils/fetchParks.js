import Key from '../ignorethisfile';

export default function fetchNearestPlacesFromGoogle (centerLatitude, centerLongitude) {

    const latitude = centerLatitude; // you can update it with user's latitude & Longitude
    const longitude = centerLongitude;
    let radMetter = 2 * 1000; // Search withing 2 KM radius

    const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?' + 'key=' + Key + '&location=' + latitude + ',' + longitude + '&radius=' + radMetter + '&type=park'

    fetch(url)
      .then(res => {
        return res.json()
      }).then((content) => {
          console.log(content)
      })
    //   .then(res => {

    //   var places = [] 
    //     for(let googlePlace of res.results) {
    //       var place = {}
    //       var lat = googlePlace.geometry.location.lat;
    //       var lng = googlePlace.geometry.location.lng;
    //       var coordinate = {
    //         latitude: lat,
    //         longitude: lng,
    //       }

    //     //   var gallery = []
    //     //   if (googlePlace.photos) {
    //     //    for(let photo of googlePlace.photos) {
    //     //      var photoUrl = Urls.GooglePicBaseUrl + photo.photo_reference;
    //     //      gallery.push(photoUrl);
    //     //   }
    //     // }

    //       place['placeTypes'] = googlePlace.types
    //       place['coordinate'] = coordinate
    //       place['placeId'] = googlePlace.place_id
    //       place['placeName'] = googlePlace.name

    //       places.push(place);
    //     }

    //     // Do your work here with places Array
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    
  }