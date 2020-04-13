import React, { useEffect } from 'react';
// log component for Logs

import Preloader from '../layout/Preloader';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTechs } from '../../actions/techActions';
import TechItem from './TechItem';

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
  //Component level state
  // const [techs, setTechs] = useState([]);
  // const [loading, setLoading] = useState(false);

  // By using this Hook, you tell React that your component needs to do something after render.
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  // //Retrieve logs
  // const getTechs = async () => {
  //   //set loading to true while doing the fetch
  //   setLoading(true);

  //   //fetch the techs
  //   const res = await fetch('/techs');

  //   //format the data as json
  //   const data = await res.json();

  //   //set the logs to the data retrieved
  //   setTechs(data);

  //   //set loading back to false

  //   // setTimeout(() => {
  //   setLoading(false);
  //   // }, 1000);
  // };

  //   if (loading) {
  //     return <Preloader />;
  //   }

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>

        <ul className='collection'>
          {!loading &&
            techs !== null &&
            techs.map((tech) => (
              //   <li className='collection-item'>{tech.firstName}</li>  <=== this was only to test
              <TechItem tech={tech} key={tech.id} />
            ))}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  getTechs: PropTypes.func.isRequired,
  tech: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  tech: state.tech,
});
export default connect(mapStateToProps, { getTechs })(TechListModal);
