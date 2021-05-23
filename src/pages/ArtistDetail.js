import React, { useState, useEffect } from "react";

const ArtistDetail = (artistID) => {
  const [artist, setArtist] = useState([]);
  const [artistAlbums, setArtistAlbums] = useState([]);
  const [artistTracks, setArtistTracks] = useState([]);
  var artistName = artist.name;

  useEffect(() => {
    async function _getArtist(artistID) {
      const _artist = {
        id: 339209,
        name: "J. Cole",
        link: "https://www.deezer.com/artist/339209",
        share:
          "https://www.deezer.com/artist/339209?utm_source=deezer&utm_content=artist-339209&utm_term=0_1621696902&utm_medium=web",
        picture: "https://api.deezer.com/artist/339209/image",
        picture_small:
          "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/56x56-000000-80-0-0.jpg",
        picture_medium:
          "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/250x250-000000-80-0-0.jpg",
        picture_big:
          "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/500x500-000000-80-0-0.jpg",
        picture_xl:
          "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/1000x1000-000000-80-0-0.jpg",
        nb_album: 20,
        nb_fan: 2053024,
        radio: true,
        tracklist: "https://api.deezer.com/artist/339209/top?limit=50",
        type: "artist",
      };
      //const _artists = await getArtist();
      //var artistArray = _artists.artists.data;
      //console.log("TTTT: " + JSON.stringify(_artists.artists.data));
      setArtist(_artist);
    }

    async function _getArtistTracks(artistID) {
      const _tracks = [
        {
          id: 1372275212,
          readable: true,
          title: "a m a r i",
          title_short: "a m a r i",
          title_version: "",
          link: "https://www.deezer.com/track/1372275212",
          duration: 148,
          rank: 991838,
          explicit_lyrics: true,
          explicit_content_lyrics: 1,
          explicit_content_cover: 1,
          preview:
            "https://cdns-preview-c.dzcdn.net/stream/c-c6ca6db8a98633a996bed765bfb27af1-4.mp3",
          contributors: [
            {
              id: 339209,
              name: "J. Cole",
              link: "https://www.deezer.com/artist/339209",
              share:
                "https://www.deezer.com/artist/339209?utm_source=deezer&utm_content=artist-339209&utm_term=0_1621701479&utm_medium=web",
              picture: "https://api.deezer.com/artist/339209/image",
              picture_small:
                "https://cdns-images.dzcdn.net/images/artist/823060d2fc446b6585cdce067c5c8fcd/56x56-000000-80-0-0.jpg",
              picture_medium:
                "https://cdns-images.dzcdn.net/images/artist/823060d2fc446b6585cdce067c5c8fcd/250x250-000000-80-0-0.jpg",
              picture_big:
                "https://cdns-images.dzcdn.net/images/artist/823060d2fc446b6585cdce067c5c8fcd/500x500-000000-80-0-0.jpg",
              picture_xl:
                "https://cdns-images.dzcdn.net/images/artist/823060d2fc446b6585cdce067c5c8fcd/1000x1000-000000-80-0-0.jpg",
              radio: true,
              tracklist: "https://api.deezer.com/artist/339209/top?limit=50",
              type: "artist",
              role: "Main",
            },
          ],
          md5_image: "1956b602e48e7d0cc9898a0288446234",
          artist: {
            id: 339209,
            name: "J. Cole",
            tracklist: "https://api.deezer.com/artist/339209/top?limit=50",
            type: "artist",
          },
          album: {
            id: 230155192,
            title: "The Off-Season",
            cover: "https://api.deezer.com/album/230155192/image",
            cover_small:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/56x56-000000-80-0-0.jpg",
            cover_medium:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/250x250-000000-80-0-0.jpg",
            cover_big:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/500x500-000000-80-0-0.jpg",
            cover_xl:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/1000x1000-000000-80-0-0.jpg",
            md5_image: "1956b602e48e7d0cc9898a0288446234",
            tracklist: "https://api.deezer.com/album/230155192/tracks",
            type: "album",
          },
          type: "track",
        },
        {
          id: 1372275222,
          readable: true,
          title: "m y . l i f e",
          title_short: "m y . l i f e",
          title_version: "",
          link: "https://www.deezer.com/track/1372275222",
          duration: 218,
          rank: 989245,
          explicit_lyrics: true,
          explicit_content_lyrics: 1,
          explicit_content_cover: 1,
          preview:
            "https://cdns-preview-3.dzcdn.net/stream/c-39c6f6d7b5ca92af835f54a46eacac4c-4.mp3",
          contributors: [
            {
              id: 339209,
              name: "J. Cole",
              link: "https://www.deezer.com/artist/339209",
              share:
                "https://www.deezer.com/artist/339209?utm_source=deezer&utm_content=artist-339209&utm_term=0_1621701479&utm_medium=web",
              picture: "https://api.deezer.com/artist/339209/image",
              picture_small:
                "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/56x56-000000-80-0-0.jpg",
              picture_medium:
                "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/250x250-000000-80-0-0.jpg",
              picture_big:
                "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/500x500-000000-80-0-0.jpg",
              picture_xl:
                "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/1000x1000-000000-80-0-0.jpg",
              radio: true,
              tracklist: "https://api.deezer.com/artist/339209/top?limit=50",
              type: "artist",
              role: "Main",
            },
            {
              id: 6853403,
              name: "21 Savage",
              link: "https://www.deezer.com/artist/6853403",
              share:
                "https://www.deezer.com/artist/6853403?utm_source=deezer&utm_content=artist-6853403&utm_term=0_1621701479&utm_medium=web",
              picture: "https://api.deezer.com/artist/6853403/image",
              picture_small:
                "https://cdns-images.dzcdn.net/images/artist/8ee4e7315bbb00dc17e904c33ec1e9e1/56x56-000000-80-0-0.jpg",
              picture_medium:
                "https://cdns-images.dzcdn.net/images/artist/8ee4e7315bbb00dc17e904c33ec1e9e1/250x250-000000-80-0-0.jpg",
              picture_big:
                "https://cdns-images.dzcdn.net/images/artist/8ee4e7315bbb00dc17e904c33ec1e9e1/500x500-000000-80-0-0.jpg",
              picture_xl:
                "https://cdns-images.dzcdn.net/images/artist/8ee4e7315bbb00dc17e904c33ec1e9e1/1000x1000-000000-80-0-0.jpg",
              radio: true,
              tracklist: "https://api.deezer.com/artist/6853403/top?limit=50",
              type: "artist",
              role: "Main",
            },
            {
              id: 90577842,
              name: "Morray ",
              link: "https://www.deezer.com/artist/90577842",
              share:
                "https://www.deezer.com/artist/90577842?utm_source=deezer&utm_content=artist-90577842&utm_term=0_1621701479&utm_medium=web",
              picture: "https://api.deezer.com/artist/90577842/image",
              picture_small:
                "https://cdns-images.dzcdn.net/images/artist/00096a70a3b3ee1a69d2a53788ed20c5/56x56-000000-80-0-0.jpg",
              picture_medium:
                "https://cdns-images.dzcdn.net/images/artist/00096a70a3b3ee1a69d2a53788ed20c5/250x250-000000-80-0-0.jpg",
              picture_big:
                "https://cdns-images.dzcdn.net/images/artist/00096a70a3b3ee1a69d2a53788ed20c5/500x500-000000-80-0-0.jpg",
              picture_xl:
                "https://cdns-images.dzcdn.net/images/artist/00096a70a3b3ee1a69d2a53788ed20c5/1000x1000-000000-80-0-0.jpg",
              radio: true,
              tracklist: "https://api.deezer.com/artist/90577842/top?limit=50",
              type: "artist",
              role: "Main",
            },
          ],
          md5_image: "1956b602e48e7d0cc9898a0288446234",
          artist: {
            id: 339209,
            name: "J. Cole",
            tracklist: "https://api.deezer.com/artist/339209/top?limit=50",
            type: "artist",
          },
          album: {
            id: 230155192,
            title: "The Off-Season",
            cover: "https://api.deezer.com/album/230155192/image",
            cover_small:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/56x56-000000-80-0-0.jpg",
            cover_medium:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/250x250-000000-80-0-0.jpg",
            cover_big:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/500x500-000000-80-0-0.jpg",
            cover_xl:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/1000x1000-000000-80-0-0.jpg",
            md5_image: "1956b602e48e7d0cc9898a0288446234",
            tracklist: "https://api.deezer.com/album/230155192/tracks",
            type: "album",
          },
          type: "track",
        },
        {
          id: 1372275262,
          readable: true,
          title: "p r i d e . i s . t h e . d e v i l",
          title_short: "p r i d e . i s . t h e . d e v i l",
          title_version: "",
          link: "https://www.deezer.com/track/1372275262",
          duration: 218,
          rank: 985591,
          explicit_lyrics: true,
          explicit_content_lyrics: 1,
          explicit_content_cover: 1,
          preview:
            "https://cdns-preview-8.dzcdn.net/stream/c-8c72754a5db1c02bf7c662619ada2fff-4.mp3",
          contributors: [
            {
              id: 339209,
              name: "J. Cole",
              link: "https://www.deezer.com/artist/339209",
              share:
                "https://www.deezer.com/artist/339209?utm_source=deezer&utm_content=artist-339209&utm_term=0_1621701479&utm_medium=web",
              picture: "https://api.deezer.com/artist/339209/image",
              picture_small:
                "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/56x56-000000-80-0-0.jpg",
              picture_medium:
                "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/250x250-000000-80-0-0.jpg",
              picture_big:
                "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/500x500-000000-80-0-0.jpg",
              picture_xl:
                "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/1000x1000-000000-80-0-0.jpg",
              radio: true,
              tracklist: "https://api.deezer.com/artist/339209/top?limit=50",
              type: "artist",
              role: "Main",
            },
            {
              id: 398521,
              name: "Lil Baby",
              link: "https://www.deezer.com/artist/398521",
              share:
                "https://www.deezer.com/artist/398521?utm_source=deezer&utm_content=artist-398521&utm_term=0_1621701479&utm_medium=web",
              picture: "https://api.deezer.com/artist/398521/image",
              picture_small:
                "https://cdns-images.dzcdn.net/images/artist/c2f3502cb7d9d8a56a8b5c2bd0c6b93a/56x56-000000-80-0-0.jpg",
              picture_medium:
                "https://cdns-images.dzcdn.net/images/artist/c2f3502cb7d9d8a56a8b5c2bd0c6b93a/250x250-000000-80-0-0.jpg",
              picture_big:
                "https://cdns-images.dzcdn.net/images/artist/c2f3502cb7d9d8a56a8b5c2bd0c6b93a/500x500-000000-80-0-0.jpg",
              picture_xl:
                "https://cdns-images.dzcdn.net/images/artist/c2f3502cb7d9d8a56a8b5c2bd0c6b93a/1000x1000-000000-80-0-0.jpg",
              radio: true,
              tracklist: "https://api.deezer.com/artist/398521/top?limit=50",
              type: "artist",
              role: "Main",
            },
          ],
          md5_image: "1956b602e48e7d0cc9898a0288446234",
          artist: {
            id: 339209,
            name: "J. Cole",
            tracklist: "https://api.deezer.com/artist/339209/top?limit=50",
            type: "artist",
          },
          album: {
            id: 230155192,
            title: "The Off-Season",
            cover: "https://api.deezer.com/album/230155192/image",
            cover_small:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/56x56-000000-80-0-0.jpg",
            cover_medium:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/250x250-000000-80-0-0.jpg",
            cover_big:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/500x500-000000-80-0-0.jpg",
            cover_xl:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/1000x1000-000000-80-0-0.jpg",
            md5_image: "1956b602e48e7d0cc9898a0288446234",
            tracklist: "https://api.deezer.com/album/230155192/tracks",
            type: "album",
          },
          type: "track",
        },
        {
          id: 1372275202,
          readable: true,
          title: "9 5 . s o u t h",
          title_short: "9 5 . s o u t h",
          title_version: "",
          link: "https://www.deezer.com/track/1372275202",
          duration: 196,
          rank: 990017,
          explicit_lyrics: true,
          explicit_content_lyrics: 1,
          explicit_content_cover: 1,
          preview:
            "https://cdns-preview-a.dzcdn.net/stream/c-a871860707b9973dbdfbefd0a95825c9-4.mp3",
          contributors: [
            {
              id: 339209,
              name: "J. Cole",
              link: "https://www.deezer.com/artist/339209",
              share:
                "https://www.deezer.com/artist/339209?utm_source=deezer&utm_content=artist-339209&utm_term=0_1621701479&utm_medium=web",
              picture: "https://api.deezer.com/artist/339209/image",
              picture_small:
                "https://cdns-images.dzcdn.net/images/artist/823060d2fc446b6585cdce067c5c8fcd/56x56-000000-80-0-0.jpg",
              picture_medium:
                "https://cdns-images.dzcdn.net/images/artist/823060d2fc446b6585cdce067c5c8fcd/250x250-000000-80-0-0.jpg",
              picture_big:
                "https://cdns-images.dzcdn.net/images/artist/823060d2fc446b6585cdce067c5c8fcd/500x500-000000-80-0-0.jpg",
              picture_xl:
                "https://cdns-images.dzcdn.net/images/artist/823060d2fc446b6585cdce067c5c8fcd/1000x1000-000000-80-0-0.jpg",
              radio: true,
              tracklist: "https://api.deezer.com/artist/339209/top?limit=50",
              type: "artist",
              role: "Main",
            },
          ],
          md5_image: "1956b602e48e7d0cc9898a0288446234",
          artist: {
            id: 339209,
            name: "J. Cole",
            tracklist: "https://api.deezer.com/artist/339209/top?limit=50",
            type: "artist",
          },
          album: {
            id: 230155192,
            title: "The Off-Season",
            cover: "https://api.deezer.com/album/230155192/image",
            cover_small:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/56x56-000000-80-0-0.jpg",
            cover_medium:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/250x250-000000-80-0-0.jpg",
            cover_big:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/500x500-000000-80-0-0.jpg",
            cover_xl:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/1000x1000-000000-80-0-0.jpg",
            md5_image: "1956b602e48e7d0cc9898a0288446234",
            tracklist: "https://api.deezer.com/album/230155192/tracks",
            type: "album",
          },
          type: "track",
        },
        {
          id: 1372275232,
          readable: true,
          title: "a p p l y i n g . p r e s s u r e",
          title_short: "a p p l y i n g . p r e s s u r e",
          title_version: "",
          link: "https://www.deezer.com/track/1372275232",
          duration: 177,
          rank: 907000,
          explicit_lyrics: true,
          explicit_content_lyrics: 1,
          explicit_content_cover: 1,
          preview:
            "https://cdns-preview-0.dzcdn.net/stream/c-036545244990e5c6bf3692e1346beab1-4.mp3",
          contributors: [
            {
              id: 339209,
              name: "J. Cole",
              link: "https://www.deezer.com/artist/339209",
              share:
                "https://www.deezer.com/artist/339209?utm_source=deezer&utm_content=artist-339209&utm_term=0_1621701479&utm_medium=web",
              picture: "https://api.deezer.com/artist/339209/image",
              picture_small:
                "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/56x56-000000-80-0-0.jpg",
              picture_medium:
                "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/250x250-000000-80-0-0.jpg",
              picture_big:
                "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/500x500-000000-80-0-0.jpg",
              picture_xl:
                "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/1000x1000-000000-80-0-0.jpg",
              radio: true,
              tracklist: "https://api.deezer.com/artist/339209/top?limit=50",
              type: "artist",
              role: "Main",
            },
          ],
          md5_image: "1956b602e48e7d0cc9898a0288446234",
          artist: {
            id: 339209,
            name: "J. Cole",
            tracklist: "https://api.deezer.com/artist/339209/top?limit=50",
            type: "artist",
          },
          album: {
            id: 230155192,
            title: "The Off-Season",
            cover: "https://api.deezer.com/album/230155192/image",
            cover_small:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/56x56-000000-80-0-0.jpg",
            cover_medium:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/250x250-000000-80-0-0.jpg",
            cover_big:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/500x500-000000-80-0-0.jpg",
            cover_xl:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/1000x1000-000000-80-0-0.jpg",
            md5_image: "1956b602e48e7d0cc9898a0288446234",
            tracklist: "https://api.deezer.com/album/230155192/tracks",
            type: "album",
          },
          type: "track",
        },
        {
          id: 1372275272,
          readable: true,
          title: "l e t . g o . m y . h a n d",
          title_short: "l e t . g o . m y . h a n d",
          title_version: "",
          link: "https://www.deezer.com/track/1372275272",
          duration: 266,
          rank: 942504,
          explicit_lyrics: true,
          explicit_content_lyrics: 1,
          explicit_content_cover: 1,
          preview:
            "https://cdns-preview-6.dzcdn.net/stream/c-63b0fef50a331260abb72b78420a77b1-4.mp3",
          contributors: [
            {
              id: 339209,
              name: "J. Cole",
              link: "https://www.deezer.com/artist/339209",
              share:
                "https://www.deezer.com/artist/339209?utm_source=deezer&utm_content=artist-339209&utm_term=0_1621701479&utm_medium=web",
              picture: "https://api.deezer.com/artist/339209/image",
              picture_small:
                "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/56x56-000000-80-0-0.jpg",
              picture_medium:
                "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/250x250-000000-80-0-0.jpg",
              picture_big:
                "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/500x500-000000-80-0-0.jpg",
              picture_xl:
                "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/1000x1000-000000-80-0-0.jpg",
              radio: true,
              tracklist: "https://api.deezer.com/artist/339209/top?limit=50",
              type: "artist",
              role: "Main",
            },
            {
              id: 483061,
              name: "Bas",
              link: "https://www.deezer.com/artist/483061",
              share:
                "https://www.deezer.com/artist/483061?utm_source=deezer&utm_content=artist-483061&utm_term=0_1621701479&utm_medium=web",
              picture: "https://api.deezer.com/artist/483061/image",
              picture_small:
                "https://cdns-images.dzcdn.net/images/artist/a2efdb149b390a171e34a50f1f8a85fe/56x56-000000-80-0-0.jpg",
              picture_medium:
                "https://cdns-images.dzcdn.net/images/artist/a2efdb149b390a171e34a50f1f8a85fe/250x250-000000-80-0-0.jpg",
              picture_big:
                "https://cdns-images.dzcdn.net/images/artist/a2efdb149b390a171e34a50f1f8a85fe/500x500-000000-80-0-0.jpg",
              picture_xl:
                "https://cdns-images.dzcdn.net/images/artist/a2efdb149b390a171e34a50f1f8a85fe/1000x1000-000000-80-0-0.jpg",
              radio: true,
              tracklist: "https://api.deezer.com/artist/483061/top?limit=50",
              type: "artist",
              role: "Main",
            },
            {
              id: 10375188,
              name: "6lack",
              link: "https://www.deezer.com/artist/10375188",
              share:
                "https://www.deezer.com/artist/10375188?utm_source=deezer&utm_content=artist-10375188&utm_term=0_1621701479&utm_medium=web",
              picture: "https://api.deezer.com/artist/10375188/image",
              picture_small:
                "https://cdns-images.dzcdn.net/images/artist/4ce545645b5ae44ba451c10d9c720285/56x56-000000-80-0-0.jpg",
              picture_medium:
                "https://cdns-images.dzcdn.net/images/artist/4ce545645b5ae44ba451c10d9c720285/250x250-000000-80-0-0.jpg",
              picture_big:
                "https://cdns-images.dzcdn.net/images/artist/4ce545645b5ae44ba451c10d9c720285/500x500-000000-80-0-0.jpg",
              picture_xl:
                "https://cdns-images.dzcdn.net/images/artist/4ce545645b5ae44ba451c10d9c720285/1000x1000-000000-80-0-0.jpg",
              radio: true,
              tracklist: "https://api.deezer.com/artist/10375188/top?limit=50",
              type: "artist",
              role: "Main",
            },
          ],
          md5_image: "1956b602e48e7d0cc9898a0288446234",
          artist: {
            id: 339209,
            name: "J. Cole",
            tracklist: "https://api.deezer.com/artist/339209/top?limit=50",
            type: "artist",
          },
          album: {
            id: 230155192,
            title: "The Off-Season",
            cover: "https://api.deezer.com/album/230155192/image",
            cover_small:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/56x56-000000-80-0-0.jpg",
            cover_medium:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/250x250-000000-80-0-0.jpg",
            cover_big:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/500x500-000000-80-0-0.jpg",
            cover_xl:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/1000x1000-000000-80-0-0.jpg",
            md5_image: "1956b602e48e7d0cc9898a0288446234",
            tracklist: "https://api.deezer.com/album/230155192/tracks",
            type: "album",
          },
          type: "track",
        },
        {
          id: 1372275252,
          readable: true,
          title: "1 0 0 . m i l ‘",
          title_short: "1 0 0 . m i l ‘",
          title_version: "",
          link: "https://www.deezer.com/track/1372275252",
          duration: 163,
          rank: 951016,
          explicit_lyrics: true,
          explicit_content_lyrics: 1,
          explicit_content_cover: 1,
          preview:
            "https://cdns-preview-a.dzcdn.net/stream/c-a325f3cd2efa968752e24283c9d14a61-4.mp3",
          contributors: [
            {
              id: 339209,
              name: "J. Cole",
              link: "https://www.deezer.com/artist/339209",
              share:
                "https://www.deezer.com/artist/339209?utm_source=deezer&utm_content=artist-339209&utm_term=0_1621701479&utm_medium=web",
              picture: "https://api.deezer.com/artist/339209/image",
              picture_small:
                "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/56x56-000000-80-0-0.jpg",
              picture_medium:
                "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/250x250-000000-80-0-0.jpg",
              picture_big:
                "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/500x500-000000-80-0-0.jpg",
              picture_xl:
                "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/1000x1000-000000-80-0-0.jpg",
              radio: true,
              tracklist: "https://api.deezer.com/artist/339209/top?limit=50",
              type: "artist",
              role: "Main",
            },
            {
              id: 483061,
              name: "Bas",
              link: "https://www.deezer.com/artist/483061",
              share:
                "https://www.deezer.com/artist/483061?utm_source=deezer&utm_content=artist-483061&utm_term=0_1621701479&utm_medium=web",
              picture: "https://api.deezer.com/artist/483061/image",
              picture_small:
                "https://cdns-images.dzcdn.net/images/artist/a2efdb149b390a171e34a50f1f8a85fe/56x56-000000-80-0-0.jpg",
              picture_medium:
                "https://cdns-images.dzcdn.net/images/artist/a2efdb149b390a171e34a50f1f8a85fe/250x250-000000-80-0-0.jpg",
              picture_big:
                "https://cdns-images.dzcdn.net/images/artist/a2efdb149b390a171e34a50f1f8a85fe/500x500-000000-80-0-0.jpg",
              picture_xl:
                "https://cdns-images.dzcdn.net/images/artist/a2efdb149b390a171e34a50f1f8a85fe/1000x1000-000000-80-0-0.jpg",
              radio: true,
              tracklist: "https://api.deezer.com/artist/483061/top?limit=50",
              type: "artist",
              role: "Main",
            },
          ],
          md5_image: "1956b602e48e7d0cc9898a0288446234",
          artist: {
            id: 339209,
            name: "J. Cole",
            tracklist: "https://api.deezer.com/artist/339209/top?limit=50",
            type: "artist",
          },
          album: {
            id: 230155192,
            title: "The Off-Season",
            cover: "https://api.deezer.com/album/230155192/image",
            cover_small:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/56x56-000000-80-0-0.jpg",
            cover_medium:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/250x250-000000-80-0-0.jpg",
            cover_big:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/500x500-000000-80-0-0.jpg",
            cover_xl:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/1000x1000-000000-80-0-0.jpg",
            md5_image: "1956b602e48e7d0cc9898a0288446234",
            tracklist: "https://api.deezer.com/album/230155192/tracks",
            type: "album",
          },
          type: "track",
        },
        {
          id: 1372275282,
          readable: true,
          title: "i n t e r l u d e",
          title_short: "i n t e r l u d e",
          title_version: "",
          link: "https://www.deezer.com/track/1372275282",
          duration: 133,
          rank: 938826,
          explicit_lyrics: true,
          explicit_content_lyrics: 1,
          explicit_content_cover: 1,
          preview:
            "https://cdns-preview-c.dzcdn.net/stream/c-c999f713ceaf449b0c04c68cb06a197d-4.mp3",
          contributors: [
            {
              id: 339209,
              name: "J. Cole",
              link: "https://www.deezer.com/artist/339209",
              share:
                "https://www.deezer.com/artist/339209?utm_source=deezer&utm_content=artist-339209&utm_term=0_1621701479&utm_medium=web",
              picture: "https://api.deezer.com/artist/339209/image",
              picture_small:
                "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/56x56-000000-80-0-0.jpg",
              picture_medium:
                "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/250x250-000000-80-0-0.jpg",
              picture_big:
                "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/500x500-000000-80-0-0.jpg",
              picture_xl:
                "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/1000x1000-000000-80-0-0.jpg",
              radio: true,
              tracklist: "https://api.deezer.com/artist/339209/top?limit=50",
              type: "artist",
              role: "Main",
            },
          ],
          md5_image: "1956b602e48e7d0cc9898a0288446234",
          artist: {
            id: 339209,
            name: "J. Cole",
            tracklist: "https://api.deezer.com/artist/339209/top?limit=50",
            type: "artist",
          },
          album: {
            id: 230155192,
            title: "The Off-Season",
            cover: "https://api.deezer.com/album/230155192/image",
            cover_small:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/56x56-000000-80-0-0.jpg",
            cover_medium:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/250x250-000000-80-0-0.jpg",
            cover_big:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/500x500-000000-80-0-0.jpg",
            cover_xl:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/1000x1000-000000-80-0-0.jpg",
            md5_image: "1956b602e48e7d0cc9898a0288446234",
            tracklist: "https://api.deezer.com/album/230155192/tracks",
            type: "album",
          },
          type: "track",
        },
        {
          id: 1372275242,
          readable: true,
          title: "p u n c h i n ‘ . t h e . c l o c k",
          title_short: "p u n c h i n ‘ . t h e . c l o c k",
          title_version: "",
          link: "https://www.deezer.com/track/1372275242",
          duration: 112,
          rank: 908897,
          explicit_lyrics: true,
          explicit_content_lyrics: 1,
          explicit_content_cover: 1,
          preview:
            "https://cdns-preview-7.dzcdn.net/stream/c-7ac81c550319d0f747ca2d0bb989fc45-4.mp3",
          contributors: [
            {
              id: 339209,
              name: "J. Cole",
              link: "https://www.deezer.com/artist/339209",
              share:
                "https://www.deezer.com/artist/339209?utm_source=deezer&utm_content=artist-339209&utm_term=0_1621701479&utm_medium=web",
              picture: "https://api.deezer.com/artist/339209/image",
              picture_small:
                "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/56x56-000000-80-0-0.jpg",
              picture_medium:
                "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/250x250-000000-80-0-0.jpg",
              picture_big:
                "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/500x500-000000-80-0-0.jpg",
              picture_xl:
                "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/1000x1000-000000-80-0-0.jpg",
              radio: true,
              tracklist: "https://api.deezer.com/artist/339209/top?limit=50",
              type: "artist",
              role: "Main",
            },
          ],
          md5_image: "1956b602e48e7d0cc9898a0288446234",
          artist: {
            id: 339209,
            name: "J. Cole",
            tracklist: "https://api.deezer.com/artist/339209/top?limit=50",
            type: "artist",
          },
          album: {
            id: 230155192,
            title: "The Off-Season",
            cover: "https://api.deezer.com/album/230155192/image",
            cover_small:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/56x56-000000-80-0-0.jpg",
            cover_medium:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/250x250-000000-80-0-0.jpg",
            cover_big:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/500x500-000000-80-0-0.jpg",
            cover_xl:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/1000x1000-000000-80-0-0.jpg",
            md5_image: "1956b602e48e7d0cc9898a0288446234",
            tracklist: "https://api.deezer.com/album/230155192/tracks",
            type: "album",
          },
          type: "track",
        },
        {
          id: 1372275292,
          readable: true,
          title: "t h e . c l i m b . b a c k",
          title_short: "t h e . c l i m b . b a c k",
          title_version: "",
          link: "https://www.deezer.com/track/1372275292",
          duration: 306,
          rank: 893254,
          explicit_lyrics: true,
          explicit_content_lyrics: 1,
          explicit_content_cover: 1,
          preview:
            "https://cdns-preview-c.dzcdn.net/stream/c-cdf1bed5e01bce420aeca57f0dff0ca5-4.mp3",
          contributors: [
            {
              id: 339209,
              name: "J. Cole",
              link: "https://www.deezer.com/artist/339209",
              share:
                "https://www.deezer.com/artist/339209?utm_source=deezer&utm_content=artist-339209&utm_term=0_1621701479&utm_medium=web",
              picture: "https://api.deezer.com/artist/339209/image",
              picture_small:
                "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/56x56-000000-80-0-0.jpg",
              picture_medium:
                "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/250x250-000000-80-0-0.jpg",
              picture_big:
                "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/500x500-000000-80-0-0.jpg",
              picture_xl:
                "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/1000x1000-000000-80-0-0.jpg",
              radio: true,
              tracklist: "https://api.deezer.com/artist/339209/top?limit=50",
              type: "artist",
              role: "Main",
            },
          ],
          md5_image: "1956b602e48e7d0cc9898a0288446234",
          artist: {
            id: 339209,
            name: "J. Cole",
            tracklist: "https://api.deezer.com/artist/339209/top?limit=50",
            type: "artist",
          },
          album: {
            id: 230155192,
            title: "The Off-Season",
            cover: "https://api.deezer.com/album/230155192/image",
            cover_small:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/56x56-000000-80-0-0.jpg",
            cover_medium:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/250x250-000000-80-0-0.jpg",
            cover_big:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/500x500-000000-80-0-0.jpg",
            cover_xl:
              "https://cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/1000x1000-000000-80-0-0.jpg",
            md5_image: "1956b602e48e7d0cc9898a0288446234",
            tracklist: "https://api.deezer.com/album/230155192/tracks",
            type: "album",
          },
          type: "track",
        },
      ];
      //const _artists = await getArtist();
      //var artistArray = _artists.artists.data;
      //console.log("TTTT: " + JSON.stringify(_artists.artists.data));
      setArtistTracks(_tracks);
    }

    async function _getArtistAlbums(artistName) {
      const _albums = [
        {
          id: "302127",
          title: "Discovery",
          link: "https://www.deezer.com/album/302127",
          cover: "https://api.deezer.com/album/302127/image",
          cover_small:
            "https://cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/56x56-000000-80-0-0.jpg",
          cover_medium:
            "https://cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/250x250-000000-80-0-0.jpg",
          cover_big:
            "https://cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/500x500-000000-80-0-0.jpg",
          cover_xl:
            "https://cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/1000x1000-000000-80-0-0.jpg",
          md5_image: "2e018122cb56986277102d2041a592c8",
          genre_id: 113,
          nb_tracks: 14,
          record_type: "album",
          tracklist: "https://api.deezer.com/album/302127/tracks",
          explicit_lyrics: false,
          artist: {
            id: "27",
            name: "Daft Punk",
            link: "https://www.deezer.com/artist/27",
            picture: "https://api.deezer.com/artist/27/image",
            picture_small:
              "https://cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
            picture_medium:
              "https://cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg",
            picture_big:
              "https://cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg",
            picture_xl:
              "https://cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg",
            tracklist: "https://api.deezer.com/artist/27/top?limit=50",
            type: "artist",
          },
          type: "album",
        },
        {
          id: "301775",
          title: "Homework",
          link: "https://www.deezer.com/album/301775",
          cover: "https://api.deezer.com/album/301775/image",
          cover_small:
            "https://cdns-images.dzcdn.net/images/cover/b870579c8650cd59b1cce656dde2ef17/56x56-000000-80-0-0.jpg",
          cover_medium:
            "https://cdns-images.dzcdn.net/images/cover/b870579c8650cd59b1cce656dde2ef17/250x250-000000-80-0-0.jpg",
          cover_big:
            "https://cdns-images.dzcdn.net/images/cover/b870579c8650cd59b1cce656dde2ef17/500x500-000000-80-0-0.jpg",
          cover_xl:
            "https://cdns-images.dzcdn.net/images/cover/b870579c8650cd59b1cce656dde2ef17/1000x1000-000000-80-0-0.jpg",
          md5_image: "b870579c8650cd59b1cce656dde2ef17",
          genre_id: 113,
          nb_tracks: 16,
          record_type: "album",
          tracklist: "https://api.deezer.com/album/301775/tracks",
          explicit_lyrics: false,
          artist: {
            id: "27",
            name: "Daft Punk",
            link: "https://www.deezer.com/artist/27",
            picture: "https://api.deezer.com/artist/27/image",
            picture_small:
              "https://cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
            picture_medium:
              "https://cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg",
            picture_big:
              "https://cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg",
            picture_xl:
              "https://cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg",
            tracklist: "https://api.deezer.com/artist/27/top?limit=50",
            type: "artist",
          },
          type: "album",
        },
        {
          id: "304193",
          title: "Alive 2007",
          link: "https://www.deezer.com/album/304193",
          cover: "https://api.deezer.com/album/304193/image",
          cover_small:
            "https://cdns-images.dzcdn.net/images/cover/ad3dda2e1b770ad143d5dbfeb667fa39/56x56-000000-80-0-0.jpg",
          cover_medium:
            "https://cdns-images.dzcdn.net/images/cover/ad3dda2e1b770ad143d5dbfeb667fa39/250x250-000000-80-0-0.jpg",
          cover_big:
            "https://cdns-images.dzcdn.net/images/cover/ad3dda2e1b770ad143d5dbfeb667fa39/500x500-000000-80-0-0.jpg",
          cover_xl:
            "https://cdns-images.dzcdn.net/images/cover/ad3dda2e1b770ad143d5dbfeb667fa39/1000x1000-000000-80-0-0.jpg",
          md5_image: "ad3dda2e1b770ad143d5dbfeb667fa39",
          genre_id: 113,
          nb_tracks: 13,
          record_type: "album",
          tracklist: "https://api.deezer.com/album/304193/tracks",
          explicit_lyrics: false,
          artist: {
            id: "27",
            name: "Daft Punk",
            link: "https://www.deezer.com/artist/27",
            picture: "https://api.deezer.com/artist/27/image",
            picture_small:
              "https://cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
            picture_medium:
              "https://cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg",
            picture_big:
              "https://cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg",
            picture_xl:
              "https://cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg",
            tracklist: "https://api.deezer.com/artist/27/top?limit=50",
            type: "artist",
          },
          type: "album",
        },
        {
          id: "303459",
          title: "Human After All",
          link: "https://www.deezer.com/album/303459",
          cover: "https://api.deezer.com/album/303459/image",
          cover_small:
            "https://cdns-images.dzcdn.net/images/cover/48701ef0699add067f257045a72d06af/56x56-000000-80-0-0.jpg",
          cover_medium:
            "https://cdns-images.dzcdn.net/images/cover/48701ef0699add067f257045a72d06af/250x250-000000-80-0-0.jpg",
          cover_big:
            "https://cdns-images.dzcdn.net/images/cover/48701ef0699add067f257045a72d06af/500x500-000000-80-0-0.jpg",
          cover_xl:
            "https://cdns-images.dzcdn.net/images/cover/48701ef0699add067f257045a72d06af/1000x1000-000000-80-0-0.jpg",
          md5_image: "48701ef0699add067f257045a72d06af",
          genre_id: 113,
          nb_tracks: 10,
          record_type: "album",
          tracklist: "https://api.deezer.com/album/303459/tracks",
          explicit_lyrics: false,
          artist: {
            id: "27",
            name: "Daft Punk",
            link: "https://www.deezer.com/artist/27",
            picture: "https://api.deezer.com/artist/27/image",
            picture_small:
              "https://cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
            picture_medium:
              "https://cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg",
            picture_big:
              "https://cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg",
            picture_xl:
              "https://cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg",
            tracklist: "https://api.deezer.com/artist/27/top?limit=50",
            type: "artist",
          },
          type: "album",
        },
        {
          id: "192529232",
          title:
            "TRON: Legacy - The Complete Edition (Original Motion Picture Soundtrack)",
          link: "https://www.deezer.com/album/192529232",
          cover: "https://api.deezer.com/album/192529232/image",
          cover_small:
            "https://cdns-images.dzcdn.net/images/cover/313e8a988614445ab1ad508da2805187/56x56-000000-80-0-0.jpg",
          cover_medium:
            "https://cdns-images.dzcdn.net/images/cover/313e8a988614445ab1ad508da2805187/250x250-000000-80-0-0.jpg",
          cover_big:
            "https://cdns-images.dzcdn.net/images/cover/313e8a988614445ab1ad508da2805187/500x500-000000-80-0-0.jpg",
          cover_xl:
            "https://cdns-images.dzcdn.net/images/cover/313e8a988614445ab1ad508da2805187/1000x1000-000000-80-0-0.jpg",
          md5_image: "313e8a988614445ab1ad508da2805187",
          genre_id: 173,
          nb_tracks: 31,
          record_type: "album",
          tracklist: "https://api.deezer.com/album/192529232/tracks",
          explicit_lyrics: false,
          artist: {
            id: "27",
            name: "Daft Punk",
            link: "https://www.deezer.com/artist/27",
            picture: "https://api.deezer.com/artist/27/image",
            picture_small:
              "https://cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
            picture_medium:
              "https://cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg",
            picture_big:
              "https://cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg",
            picture_xl:
              "https://cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg",
            tracklist: "https://api.deezer.com/artist/27/top?limit=50",
            type: "artist",
          },
          type: "album",
        },
        {
          id: "299205",
          title: "Daft Club",
          link: "https://www.deezer.com/album/299205",
          cover: "https://api.deezer.com/album/299205/image",
          cover_small:
            "https://cdns-images.dzcdn.net/images/cover/0416976ab8f3f32e0b447dd1b9b1e0cf/56x56-000000-80-0-0.jpg",
          cover_medium:
            "https://cdns-images.dzcdn.net/images/cover/0416976ab8f3f32e0b447dd1b9b1e0cf/250x250-000000-80-0-0.jpg",
          cover_big:
            "https://cdns-images.dzcdn.net/images/cover/0416976ab8f3f32e0b447dd1b9b1e0cf/500x500-000000-80-0-0.jpg",
          cover_xl:
            "https://cdns-images.dzcdn.net/images/cover/0416976ab8f3f32e0b447dd1b9b1e0cf/1000x1000-000000-80-0-0.jpg",
          md5_image: "0416976ab8f3f32e0b447dd1b9b1e0cf",
          genre_id: 113,
          nb_tracks: 14,
          record_type: "album",
          tracklist: "https://api.deezer.com/album/299205/tracks",
          explicit_lyrics: true,
          artist: {
            id: "27",
            name: "Daft Punk",
            link: "https://www.deezer.com/artist/27",
            picture: "https://api.deezer.com/artist/27/image",
            picture_small:
              "https://cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
            picture_medium:
              "https://cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg",
            picture_big:
              "https://cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg",
            picture_xl:
              "https://cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg",
            tracklist: "https://api.deezer.com/artist/27/top?limit=50",
            type: "artist",
          },
          type: "album",
        },
        {
          id: "1471670",
          title: "TRON: Legacy Reconfigured",
          link: "https://www.deezer.com/album/1471670",
          cover: "https://api.deezer.com/album/1471670/image",
          cover_small:
            "https://cdns-images.dzcdn.net/images/cover/2f34e0fe8086785fab7d6dfd8d48ba5a/56x56-000000-80-0-0.jpg",
          cover_medium:
            "https://cdns-images.dzcdn.net/images/cover/2f34e0fe8086785fab7d6dfd8d48ba5a/250x250-000000-80-0-0.jpg",
          cover_big:
            "https://cdns-images.dzcdn.net/images/cover/2f34e0fe8086785fab7d6dfd8d48ba5a/500x500-000000-80-0-0.jpg",
          cover_xl:
            "https://cdns-images.dzcdn.net/images/cover/2f34e0fe8086785fab7d6dfd8d48ba5a/1000x1000-000000-80-0-0.jpg",
          md5_image: "2f34e0fe8086785fab7d6dfd8d48ba5a",
          genre_id: 106,
          nb_tracks: 15,
          record_type: "album",
          tracklist: "https://api.deezer.com/album/1471670/tracks",
          explicit_lyrics: false,
          artist: {
            id: "27",
            name: "Daft Punk",
            link: "https://www.deezer.com/artist/27",
            picture: "https://api.deezer.com/artist/27/image",
            picture_small:
              "https://cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
            picture_medium:
              "https://cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg",
            picture_big:
              "https://cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg",
            picture_xl:
              "https://cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg",
            tracklist: "https://api.deezer.com/artist/27/top?limit=50",
            type: "artist",
          },
          type: "album",
        },
      ];
      //const _artists = await getArtists();
      //var artistArray = _artists.artists.data;
      //console.log("TTTT: " + JSON.stringify(_artists.artists.data));
      setArtistAlbums(_albums);
    }
    _getArtistTracks(artistID);
    _getArtist(artistID);
    _getArtistAlbums(artistName);
  }, []);

  return (
    <div className="container artistDetail">
      <div className="card mb-3">
        <div className="row section1">
          <div className="col-sm-8 imageContainer">
            <img src={artist.picture_medium} className="" alt={artist.name} />
            <div className="imageFloaterContainer">
              <h2>{artist.name}</h2>
              <p className="card-text">
                <small>{artist.nb_fan}</small>
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card-body">
              <h5 className="card-title">Top Tracks</h5>
              <ol>
                {artistTracks.map((artistTrack) => (
                  <li>{artistTrack.title_short}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Albums</h5>
          <div className=" albums pt-3">
            {artistAlbums.map((artistAlbum) => (
              <div className="card mb-3" key={artistAlbum.id}>
                <img
                  src={artistAlbum.cover_medium}
                  className="card-img-top"
                  alt={artistAlbum.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{`${artistAlbum.title.substring(
                    0,
                    20
                  )}`}</h5>
                  <p className="card-text">
                    <small className="text-muted">
                      Tracks: {artistAlbum.nb_tracks}
                    </small>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetail;
