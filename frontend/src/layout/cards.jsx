import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Modal, Button, TextField } from '@mui/material';

const ScheduleCards = () => {
    const [data, setScheduleData] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [selectedData, setSelectedData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3000/schedule');
            const result = await response.json();
            setScheduleData(result);
        };

        fetchData();
    }, []);

    const handleOpenModal = (index) => {
        setSelectedIndex(index);
        setSelectedData(data[0][index]);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedIndex(null);
        setSelectedData({});
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSelectedData({ ...selectedData, [name]: value });
    };

    const handleSave = async () => {
        const updatedData = [...data];
        updatedData[selectedIndex] = selectedData;
        setScheduleData(updatedData);

        console.log(updatedData);

        // await fetch(`http://localhost:3000/schedule/${selectedData._id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(selectedData),
        // });

        handleCloseModal();
    };

    useEffect(() => {
        const sampleData = [
            {
                _id: '1',
                0: { date: '2023-10-01', time1: '08:00', time2: '12:00', time3: '16:00' },
                1: { date: '2023-10-02', time1: '09:00', time2: '13:00', time3: '17:00' },
            },
            {
                _id: '2',
                0: { date: '2023-10-03', time1: '10:00', time2: '14:00', time3: '18:00' },
                1: { date: '2023-10-04', time1: '11:00', time2: '15:00', time3: '19:00' },
            },
        ];
        setScheduleData(sampleData);
    }, []);

    const renderCard = (key, value) => (
        <Card
            key={key}
            style={{ margin: '10px', padding: '10px', cursor: 'pointer' }}
            onClick={() => handleOpenModal(key)}
        >
            <CardContent>
                <Typography variant="h6">Index: {key}</Typography>
                <Typography variant="body1">Date: {value.date}</Typography>
                <Typography variant="body2">Time1: {value.time1}</Typography>
                <Typography variant="body2">Time2: {value.time2}</Typography>
                <Typography variant="body2">Time3: {value.time3}</Typography>
            </CardContent>
        </Card>
    );

    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom>
                Data Viewer
            </Typography>
            {data.map((item, index) => (
                <div key={index}>
                    {Object.keys(item)
                        .filter((key) => key !== "_id")
                        .map((key) => renderCard(key, item[key]))}
                </div>
            ))}

            {/* Modal */}
            <Modal open={openModal} onClose={handleCloseModal}>
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'white',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: 24,
                    }}
                >
                    {selectedIndex !== null && (
                        <>
                            <Typography variant="h6" gutterBottom>
                                Details for Index: {selectedIndex}
                            </Typography>
                            <TextField
                                label="Date"
                                name="date"
                                value={selectedData.date || ''}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Time1"
                                name="time1"
                                value={selectedData.time1 || ''}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Time2"
                                name="time2"
                                value={selectedData.time2 || ''}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Time3"
                                name="time3"
                                value={selectedData.time3 || ''}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                style={{ marginTop: '20px' }}
                                onClick={handleSave}
                            >
                                Save
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                style={{ marginTop: '20px', marginLeft: '10px' }}
                                onClick={handleCloseModal}
                            >
                                Close
                            </Button>
                        </>
                    )}
                </div>
            </Modal>
        </div>
    );
};

export default ScheduleCards;
