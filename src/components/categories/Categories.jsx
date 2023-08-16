import React, { useContext, useState } from 'react'
import { AuthContext } from '../../providers/AuthProvider';
import container from '../../shared/container';

const Categories = () => {
    const [categoriesData, setCategoriesData] = useState([]);
    const { activeCategory, handleCategoryClick } =
      useContext(AuthContext);

      useEffect(() => {
        fetch("propertyType.json")
        .then((res) => res.json())
        .then((data) => setCategoriesData(data))
        .catch((error)=> console.log(error))
    }, [])

  return (
    <div>
        <Container>

        </Container>
    </div>
  )
}

export default Categories