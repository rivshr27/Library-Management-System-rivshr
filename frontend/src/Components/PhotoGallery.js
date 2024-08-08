import React from 'react'
import './PhotoGallery.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function PhotoGallery() {
    return (
        <div className='photogallery-container'>
            <h1 className='photogallery-title'>Photo Gallery</h1>
            <div className="photogallery-images">
                <img src="https://cdn.pixabay.com/photo/2017/07/15/22/07/library-2507902_1280.jpg" alt=''/>
                <img src="https://cdn.pixabay.com/photo/2021/11/10/18/21/woman-6784555_1280.jpg" alt=''/>
                <img src="https://cdn.pixabay.com/photo/2023/11/26/08/33/ai-generated-8413072_1280.png" alt=''/>
                <img src="https://cdn.pixabay.com/photo/2014/08/08/21/03/bookshelf-413705_1280.jpg" alt=''/>
                <img src="https://cdn.pixabay.com/photo/2021/12/23/16/41/library-6889590_1280.jpg" alt=''/>
                <img src="https://cdn.pixabay.com/photo/2017/08/07/03/22/books-2599241_1280.jpg" alt=''/>
                <img src="https://cdn.pixabay.com/photo/2016/11/20/09/08/books-1842306_1280.jpg" alt=''/>
                <img src="https://static01.nyt.com/images/2015/10/24/opinion/24manguel/24manguel-superJumbo.jpg?quality=75&auto=webp" alt=''/>
                <img src="https://www.travelandleisure.com/thmb/y7A5Ioh5ZlgJKVYitPNdplz-8pU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/library-of-el-escorial-san-lorenzo-de-el-escorial-spain-LIBRARY0319-ededae171b9040c6be25bfa8bcd2d70b.jpg" alt=''/>
                <img src="https://www.travelandleisure.com/thmb/QPac2Cn38oHl31xCC06srrScUXw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/royal-portuguese-reading-room-rio-de-janeiro-brazil-LIBRARY0319-d72feb0849d543468d810f1c9b2bcb0b.jpg" alt=''/>
            </div>
            {/* <button>VIEW MORE<ArrowForwardIosIcon style={{fontSize:20}}/></button> */}
        </div>
    )
}

export default PhotoGallery