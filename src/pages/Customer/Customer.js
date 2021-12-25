import { useEffect, useState } from 'react';
import { Table, Container, Row, Col, Button, Pagination } from 'react-bootstrap';
import ModalAddCustomer from '../../components/ModalAddCustomer';
import ModalDelete from '../../components/ModalDelete';
import { customer_list_data } from '../../dummy/DummyData';
import './Customer.scss';

function Customer() {
    const [custList, setCust] = useState([]);
    const [active, setActive] = useState(1);
    const limit = 5;
    const [offset, setOffset] = useState(0);
    const [showModalAdd, setModalAdd] = useState(false);    
    const [showModalDel, setModalDel] = useState(false);

    useEffect(() => {
        GetListCustomer();
    }, []);

    const handlePageChange = (pageNumber) => {
        // console.log(pageNumber)
        setActive(pageNumber);
        setOffset((pageNumber - 1) * limit);
    }

    var result = custList.slice();

    const resultTotal = result.length;
    result = result.slice(offset, offset + limit);

    function paginationBasic() {
        //pagination
        var itemPerPage = 5;
        var totalItems = custList.length;
        var totalPage = Math.ceil(totalItems / itemPerPage);
        if (isNaN(totalPage)) {
            totalPage = 0;
        }
        const totalPageToShow = 5;
        let items = [];
        for (let i = 0; i < totalPage; i++) {
            items.push(i + 1);
        }
        if (items.length > totalPageToShow) {
            var start = (active - Math.ceil(totalPageToShow / 2));
            var end = (start + totalPageToShow);

            if (start < 0) {
                start = 0;
            }

            if (end > totalPage) {
                start = totalPage - totalPageToShow;
            }

            items = items.splice(start, totalPageToShow)
        }

        return (
            <div>
                <Pagination size="sm">
                    {items.map((i) => {
                        return (
                            <Pagination.Item key={"pages" + i} active={i === active} onClick={() => handlePageChange(i)}>
                                {i}
                            </Pagination.Item>
                        )
                    })}
                </Pagination>
            </div>
        )
    };

    function GetListCustomer() {
        //get data request
        // axios.get('', {
        //     "Content-Type": "application/xml; charset=utf-8"
        // }).then(res => {
            //Storing users detail in state array object
            // console.log(res.data);
        // });
        console.log("get list customer");
        //dummy
        setCust(customer_list_data);

    }

    function TableCustomer() {
        return (
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>CustId</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        custList !== null && custList !== undefined ?
                            result.map((item, i) => (
                                <tr key={i}>
                                    <td>{((active-1)*limit) + i + 1}</td>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.city}</td>
                                    <td>{item.email}</td>
                                    <td className='btn-detail'>  
                                        <Button onClick={()=>setModalDel(true)}>❌</Button>
                                    </td>
                                </tr>
                            ))
                            : null
                    }
                </tbody>
            </Table>
        )
    }
    return (
        <Container className="cont-wrapper">
            <ModalAddCustomer
                show={showModalAdd}
                handleClose={()=>setModalAdd(false)}
                handleSave={()=>setModalAdd(false)}
            />
            <ModalDelete
                show={showModalDel}
                handleClose={()=>setModalDel(false)}
                handleSave={()=>setModalDel(false)}
            />
            <h5 style={{ marginBottom: "20px" }}>Table Customer</h5>

            <Row>
                <Col sm md={12}>
                    {TableCustomer()}
                </Col>
            </Row>
            <Row>
                <Col sm md={8}>
                    {paginationBasic()}
                </Col>
                <Col sm md={4}>
                    <Button style={{ float: "right" }} onClick={()=>setModalAdd(true)}>Add New Customer</Button>
                </Col>
            </Row>

        </Container>

    )
}
export default Customer;