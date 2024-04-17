import React from 'react'
import Image from 'next/image'
import EditIcon from '@mui/icons-material/Edit';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Tooltip } from '@mui/material';
import styles from './ProductsTable.module.css'
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const ProductsTable = () => {

    const handleNewProductClick = () => {
        
    }










    return (
        <div className='overflow-x-auto bg-neutral rounded-xl mb-5'>
            <div className='flex justify-between'>
                <h1 className='m-4 font-bold mb-2'>Product List</h1>
                <button className="btn btn-sm m-4 mb-0">
                    New Product
                    <AddIcon />
                </button>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th className='text-center' style={{ width: '15%' }}>Price</th>
                        <th className='text-center' style={{ width: '10%' }}>Stocks</th>
                        <th className='text-center' style={{ width: '15%' }}></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className='flex items-center gap-3'>
                                <div className='avatar'>
                                    <div className='mask mask-squircle w-12 h-12'>
                                        <Image src={`/static/bongme1.jpg`}
                                            alt={'test'}
                                            height='70'
                                            width='70' />
                                    </div>
                                </div>
                                <div>
                                    <div className='font-bold'>Sample Product <span className='badge badge-ghost badge-sm ms-0'>Sale 50%</span></div>
                                    <div className='text-sm opacity-50'>Small product description</div>
                                </div>
                            </div>
                        </td>
                        <td className='text-center'>
                            <h1>$10.00</h1>
                        </td>
                        <td className='text-center'>100</td>
                        <th className='text-right'>
                            <Tooltip title='Edit'>
                                <button className={`${styles.actionButton} btn btn-sm btn-square mx-1`}>
                                    <EditIcon className='h-4' />
                                </button>
                            </Tooltip>

                            <Tooltip title='Restock'>
                                <button className={`${styles.actionButton} btn btn-sm btn-square mx-1`}>
                                    <AddShoppingCartIcon className='h-4' />
                                </button>
                            </Tooltip>

                            <Tooltip title='Delete'>
                                <button className={`${styles.actionButton} btn btn-sm btn-square mx-1`}>
                                    <DeleteIcon className='h-4' />
                                </button>
                            </Tooltip>
                        </th>
                    </tr>

                    <tr>
                        <td>
                            <div className='flex items-center gap-3'>
                                <div className='avatar'>
                                    <div className='mask mask-squircle w-12 h-12'>
                                        <Image src={`/static/bongme1.jpg`}
                                            alt={'test'}
                                            height='70'
                                            width='70' />
                                    </div>
                                </div>
                                <div>
                                    <div className='font-bold'>Sample Product <span className='badge badge-ghost badge-sm ms-0'>Sale 50%</span></div>
                                    <div className='text-sm opacity-50'>Small product description</div>
                                </div>
                            </div>
                        </td>
                        <td className='text-center'>
                            <h1>$10.00</h1>
                        </td>
                        <td className='text-center'>100</td>
                        <th className='text-right'>
                            <Tooltip title='Edit'>
                                <button className={`${styles.actionButton} btn btn-square mx-1`}>
                                    <EditIcon className='h-4' />
                                </button>
                            </Tooltip>

                            <Tooltip title='Restock'>
                                <button className={`${styles.actionButton} btn btn-square mx-1`}>
                                    <AddShoppingCartIcon className='h-4' />
                                </button>
                            </Tooltip>

                            <Tooltip title='Delete'>
                                <button className={`${styles.actionButton} btn btn-square mx-1`}>
                                    <DeleteIcon className='h-4' />
                                </button>
                            </Tooltip>
                        </th>
                    </tr>

                    <tr>
                        <td>
                            <div className='flex items-center gap-3'>
                                <div className='avatar'>
                                    <div className='mask mask-squircle w-12 h-12'>
                                        <Image src={`/static/bongme1.jpg`}
                                            alt={'test'}
                                            height='70'
                                            width='70' />
                                    </div>
                                </div>
                                <div>
                                    <div className='font-bold'>Sample Product <span className='badge badge-ghost badge-sm ms-0'>Sale 50%</span></div>
                                    <div className='text-sm opacity-50'>Small product description</div>
                                </div>
                            </div>
                        </td>
                        <td className='text-center'>
                            <h1>$10.00</h1>
                        </td>
                        <td className='text-center'>100</td>
                        <th className='text-right'>
                            <Tooltip title='Edit'>
                                <button className={`${styles.actionButton} btn btn-square mx-1`}>
                                    <EditIcon className='h-4' />
                                </button>
                            </Tooltip>

                            <Tooltip title='Restock'>
                                <button className={`${styles.actionButton} btn btn-square mx-1`}>
                                    <AddShoppingCartIcon className='h-4' />
                                </button>
                            </Tooltip>

                            <Tooltip title='Delete'>
                                <button className={`${styles.actionButton} btn btn-square mx-1`}>
                                    <DeleteIcon className='h-4' />
                                </button>
                            </Tooltip>
                        </th>
                    </tr>



                </tbody>
            </table>
        </div>
    )
}

export default ProductsTable