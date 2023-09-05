import home from './home.png';
// import { FaPen } from 'react-icons/fa';
// import { FaTrash } from 'react-icons/fa';
// import styles from './cart.module.css';
import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button, ToggleButton, ToggleButtonGroup } from '@mui/material';
const posts = [
  {
    "movieId": 1,
    "movieName": "\"Avengers: Endgame\" (2019)",
    "moviePictureUrl": "https://hips.hearstapps.com/hmg-prod/images/avengersendgame-1642714188.jpeg",
    "parties": [
      {
        "partyId": 1,
        "partyFrom": "2021-01-01T10:00:00",
        "partyTo": "2021-01-01T12:00:00"
      },

    ]
  },
  {
    "movieId": 2,
    "movieName": "\"Spider-Man: Far From Home\" (2019)",
    "moviePictureUrl": "https://hips.hearstapps.com/hmg-prod/images/spider-man-far-from-home-1642714214.jpeg",
    "parties": [
      {
        "partyId": 2,
        "partyFrom": "2021-01-01T10:00:00",
        "partyTo": "2021-01-01T12:00:00"
      },

    ]
  },
  {
    "movieId": 3,
    "movieName": "\"Spider-Man: Homecoming\" (2017)",
    "moviePictureUrl": "https://hips.hearstapps.com/hmg-prod/images/spider-man-homecoming-1642713844.jpeg",
    "parties": [
      {
        "partyId": 3,
        "partyFrom": "2021-01-01T10:00:00",
        "partyTo": "2021-01-01T12:00:00"
      }
    ]
  },
  {
    "movieId": 1,
    "movieName": "\"Avengers: Endgame\" (2019)",
    "moviePictureUrl": "https://hips.hearstapps.com/hmg-prod/images/avengersendgame-1642714188.jpeg",
    "parties": [
      {
        "partyId": 1,
        "partyFrom": "2021-01-01T10:00:00",
        "partyTo": "2021-01-01T12:00:00"
      },

    ]
  },
  {
    "movieId": 2,
    "movieName": "\"Spider-Man: Far From Home\" (2019)",
    "moviePictureUrl": "https://hips.hearstapps.com/hmg-prod/images/spider-man-far-from-home-1642714214.jpeg",
    "parties": [
      {
        "partyId": 2,
        "partyFrom": "2021-01-01T10:00:00",
        "partyTo": "2021-01-01T12:00:00"
      },

    ]
  },
  {
    "movieId": 3,
    "movieName": "\"Spider-Man: Homecoming\" (2017)",
    "moviePictureUrl": "https://hips.hearstapps.com/hmg-prod/images/spider-man-homecoming-1642713844.jpeg",
    "parties": [
      {
        "partyId": 3,
        "partyFrom": "2021-01-01T10:00:00",
        "partyTo": "2021-01-01T12:00:00"
      }
    ]
  },
  {
    "movieId": 1,
    "movieName": "\"Avengers: Endgame\" (2019)",
    "moviePictureUrl": "https://hips.hearstapps.com/hmg-prod/images/avengersendgame-1642714188.jpeg",
    "parties": [
      {
        "partyId": 1,
        "partyFrom": "2021-01-01T10:00:00",
        "partyTo": "2021-01-01T12:00:00"
      },

    ]
  },
  {
    "movieId": 2,
    "movieName": "\"Spider-Man: Far From Home\" (2019)",
    "moviePictureUrl": "https://hips.hearstapps.com/hmg-prod/images/spider-man-far-from-home-1642714214.jpeg",
    "parties": [
      {
        "partyId": 2,
        "partyFrom": "2021-01-01T10:00:00",
        "partyTo": "2021-01-01T12:00:00"
      },

    ]
  },
  {
    "movieId": 3,
    "movieName": "\"Spider-Man: Homecoming\" (2017)",
    "moviePictureUrl": "https://hips.hearstapps.com/hmg-prod/images/spider-man-homecoming-1642713844.jpeg",
    "parties": [
      {
        "partyId": 3,
        "partyFrom": "2021-01-01T10:00:00",
        "partyTo": "2021-01-01T12:00:00"
      }
    ]
  },
  {
    "movieId": 1,
    "movieName": "\"Avengers: Endgame\" (2019)",
    "moviePictureUrl": "https://hips.hearstapps.com/hmg-prod/images/avengersendgame-1642714188.jpeg",
    "parties": [
      {
        "partyId": 1,
        "partyFrom": "2021-01-01T10:00:00",
        "partyTo": "2021-01-01T12:00:00"
      },

    ]
  },
  {
    "movieId": 2,
    "movieName": "\"Spider-Man: Far From Home\" (2019)",
    "moviePictureUrl": "https://hips.hearstapps.com/hmg-prod/images/spider-man-far-from-home-1642714214.jpeg",
    "parties": [
      {
        "partyId": 2,
        "partyFrom": "2021-01-01T10:00:00",
        "partyTo": "2021-01-01T12:00:00"
      },

    ]
  },
  {
    "movieId": 3,
    "movieName": "\"Spider-Man: Homecoming\" (2017)",
    "moviePictureUrl": "https://hips.hearstapps.com/hmg-prod/images/spider-man-homecoming-1642713844.jpeg",
    "parties": [
      {
        "partyId": 3,
        "partyFrom": "2021-01-01T10:00:00",
        "partyTo": "2021-01-01T12:00:00"
      }
    ]
  },
  {
    "movieId": 1,
    "movieName": "\"Avengers: Endgame\" (2019)",
    "moviePictureUrl": "https://hips.hearstapps.com/hmg-prod/images/avengersendgame-1642714188.jpeg",
    "parties": [
      {
        "partyId": 1,
        "partyFrom": "2021-01-01T10:00:00",
        "partyTo": "2021-01-01T12:00:00"
      },

    ]
  },
  {
    "movieId": 2,
    "movieName": "\"Spider-Man: Far From Home\" (2019)",
    "moviePictureUrl": "https://hips.hearstapps.com/hmg-prod/images/spider-man-far-from-home-1642714214.jpeg",
    "parties": [
      {
        "partyId": 2,
        "partyFrom": "2021-01-01T10:00:00",
        "partyTo": "2021-01-01T12:00:00"
      },

    ]
  },
  {
    "movieId": 3,
    "movieName": "\"Spider-Man: Homecoming\" (2017)",
    "moviePictureUrl": "https://hips.hearstapps.com/hmg-prod/images/spider-man-homecoming-1642713844.jpeg",
    "parties": [
      {
        "partyId": 3,
        "partyFrom": "2021-01-01T10:00:00",
        "partyTo": "2021-01-01T12:00:00"
      }
    ]
  },
  {
    "movieId": 1,
    "movieName": "\"Avengers: Endgame\" (2019)",
    "moviePictureUrl": "https://hips.hearstapps.com/hmg-prod/images/avengersendgame-1642714188.jpeg",
    "parties": [
      {
        "partyId": 1,
        "partyFrom": "2021-01-01T10:00:00",
        "partyTo": "2021-01-01T12:00:00"
      },

    ]
  },
  {
    "movieId": 2,
    "movieName": "\"Spider-Man: Far From Home\" (2019)",
    "moviePictureUrl": "https://hips.hearstapps.com/hmg-prod/images/spider-man-far-from-home-1642714214.jpeg",
    "parties": [
      {
        "partyId": 2,
        "partyFrom": "2021-01-01T10:00:00",
        "partyTo": "2021-01-01T12:00:00"
      },

    ]
  },
  {
    "movieId": 3,
    "movieName": "\"Spider-Man: Homecoming\" (2017)",
    "moviePictureUrl": "https://hips.hearstapps.com/hmg-prod/images/spider-man-homecoming-1642713844.jpeg",
    "parties": [
      {
        "partyId": 3,
        "partyFrom": "2021-01-01T10:00:00",
        "partyTo": "2021-01-01T12:00:00"
      }
    ]
  },

]

const baseURL = "https://miracle49-001-site1.itempurl.com/api/testing/parties";

const index = () => {
  const theme = useTheme();
  const [alignment, setAlignment] = useState('partyFrom');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  // const [post, setPost] = useState('');

  // useEffect(() => {
  //   const featchData = axios.get(baseURL)
  //     .then((response) => {
  //       setPost(response.data);
  //       console.log(response.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }, []);
  return (
    // <div className={styles.home_cart}>
    //   <div className={styles.home_con}>
    //     {posts.map((posts, index) => {
    //       return (
    //         <div key={index} className={styles.home_img}>
    //           <img src={posts.moviePictureUrl} alt="Error happened" />
    //         </div>
    //       )
    //     })}
    //     {posts.map((post, index) => {

    //       <div key={index} className={styles.right_con}>
    //         <div className={styles.name}>
    //           <h1>{post.movieName}</h1>
    //           <div className={styles.icon}>
    //             <FaTrash />
    //             <FaPen />
    //           </div>
    //         </div>
    //         <div className={styles.but}>
    //           <h1> name</h1>
    //           <div className={styles.butGroup}>
    //             <button className={styles.colBut}>{post.parties}</button>
    //             <button>{post.parties} ;ll;</button>
    //           </div>
    //         </div>
    //         <div className={styles.select}>
    //           <Link
    //             to='./shop'>
    //             <button>Select Your Chair</button>
    //           </Link>
    //         </div>
    //       </div>
    //     })}


    //   </div>
    // </div>
    <>
      {posts.map((data) => {
        return (
          <Card key={data.movieId} sx={{ display: 'flex' }} className='ms-3'>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={data.moviePictureUrl}
              alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5" className=''>
                  {data.movieName}
                </Typography>
                <Typography variant="subtitle1" color="black"className='text-start fw-semibold fs-5 px-3' >Party Time</Typography>
                  {data.parties.map((post)=>{
                    return(    
                <ToggleButtonGroup
                key={post.partyId}
                  color="primary"
                  value={alignment}
                  exclusive
                  onChange={handleChange}
                  aria-label="Platform"
                >
                  <ToggleButton className='ms-3' variant='primary' value="partyFrom">{post.partyFrom}</ToggleButton>
                  <ToggleButton className='ms-3' variant='primary' value="partyTo">{post.partyTo}</ToggleButton>
                </ToggleButtonGroup>
                )
              })}
              </CardContent>

              <Link
                to='/shop'
                className='d-grid gap-2 p-3'
              >
                <Button variant="contained">
                  Disable elevation
                </Button>
              </Link>
            </Box>
          </Card>
        )
      })}
    </>

  );
};

export default index;
