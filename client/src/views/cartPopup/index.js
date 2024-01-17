import { Box, Button, Card, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import appContext from 'state/appContext'
import baseUrl from 'url'
import { toast } from 'react-toastify';
export default function Default() {

    const appState = useContext(appContext);
    const { showCart, setShowCart, items, getData } = appState
    const totalPrice = () => {
        let total = 0;
        items.map((item) => {
            total += item.categoryID.price
        })
        return total;
    }
    const removeItem = async (_id) => {
        await fetch(`${baseUrl}cart/delete?_id=${_id}`,{method:'DELETE'})
        getData()
    }
    const removeAllItem = async () => {
        await fetch(`${baseUrl}cart/delete/all?userID=${localStorage.getItem('_id')}`,{method:'DELETE'})
        getData()
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            {showCart &&
                <Box style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black color for the overlay
                    zIndex: 111,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '16px'
                }} onClick={(e) => {
                    if (e.target == e.currentTarget) {
                        setShowCart(false)
                    }
                }} >

                    <Box sx={{
                        height: '100vh',
                        overflow: 'auto',
                        right: '0%',
                        top: '0%',
                        position: 'absolute',
                        backgroundColor: 'white',
                        borderRadius: '16px',
                        fontFamily: "'Poppins', sans-serif",

                    }}>

                        <Box sx={{ padding: '25px' }}>
                            <center><Typography variant='h3'>Cart</Typography></center>
                            {items.length > 0 ?items.map((item, index) => (
                                <Card key={index} sx={{
                                    margin: '10px 0px',
                                    padding: '15px',
                                    height: '100px',
                                    position: 'relative'
                                }}>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                    }}>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}>
                                            <Box>
                                                <img src={`${baseUrl}${item.categoryID.image}`} alt='item' width={'150px'} />
                                            </Box>
                                            <Box sx={{ padding: '0px 15px' }}>
                                                <Typography variant='h6'>{item.categoryID.name}</Typography>
                                                <Typography variant='h6'>Price: {item.categoryID.price}</Typography>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Button variant='contained' color='error' onClick={() => removeItem(item._id)}>Remove</Button>
                                        </Box>
                                    </Box>
                                </Card>
                            )):<center><br/><Typography>No items added</Typography></center>}
                        </Box>
                        <Box sx={{
                            width: '92%',
                            position: 'sticky',
                            padding: '25px',
                            left: '0',
                            bottom: '0', // Stick to the bottom
                            backgroundColor: 'white',
                            zIndex: '999999',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                            <Typography variant='h6'>Total Price</Typography>
                            <Box>
                                <Typography><b>Item Price:</b> {totalPrice()}</Typography>
                                <Typography><b>Tax (20%):</b> {(totalPrice() * 20) / 100}</Typography>
                                <Typography><b>Total:</b> {totalPrice() + ((totalPrice() * 20) / 100)}</Typography>
                                <br /><Button variant='contained' onClick={()=>{
                          
                                    toast.success('Items Bought sucessfully', {
                                        position: "top-right",
                                        autoClose: 5000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: "light",
                                        });
                                    setShowCart(false)
                                    removeAllItem()
                                }}>Buy Now</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>}
        </>
    )
}
