import { Formik, Form, Field } from 'formik';
import { PiMagnifyingGlassLight } from 'react-icons/pi';
export default function MoviesPage({ searchQuery }) {
  return (
    <Formik initialValues={{ searchFilm: '' }} onSubmit={searchQuery}>
      <Form>
        <div>
          <button type="submit">
            <PiMagnifyingGlassLight />
          </button>
          <Field
            type="text"
            autoComplete="off"
            autoFocus={true}
            placeholder="Search film"
            name="searchFilm"
          />
        </div>
      </Form>
    </Formik>
  );
}
