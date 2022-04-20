import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { buyCake, fetchUsers } from '../redux';

function UserExample({ userData, fetchUsers }) {
  
  const { loading, users, error } = userData;
  
  useEffect(() => {
    fetchUsers();
  }, []);

  return loading ? (
    <h2>loading...</h2>
  ) : error ? (
    <h2>error: {error}</h2>
  ) : (
    <div>
      <h2>Users List</h2>
      <div>
        {users && users.map((user) => <p>{user.name}</p>)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

// export default UserExample;
export default connect(mapStateToProps, mapDispatchToProps)(UserExample);
