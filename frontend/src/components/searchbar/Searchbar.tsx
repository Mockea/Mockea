import { Field, Form, Formik} from 'formik'



export const Searchbar = () => {

  const handleSearch = (searchInput : string) => {
    console.log(searchInput);
  }

  return (
    <Formik
    initialValues={  {searchInput: ""} }
    onSubmit={(values) => handleSearch(values.searchInput)}
    >
      <Form action="" className="searchbar flex w-full mr-4 hover:bg-hovergrey rounded-full py-2.5 bg-grey px-5">
        <Field type="text" className="search flex grow bg-inherit focus-visible:outline-0" name="searchInput" placeholder="What are you looking for?"/>
        <button type="submit"><i className="fa-solid fa-magnifying-glass"/></button>
      </Form>
    </Formik>
  )
}
