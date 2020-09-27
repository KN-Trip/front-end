import { useSelector, useDispatch } from 'react-redux';
import { postTESTRequest } from '../modules/testpost';
import { useHistory } from 'react-router-dom';

export default function usePostTest() {
  const { TEST_loading, TEST, TEST_error } = useSelector(
    (state) => state.testpost
  );

  const { login } = useSelector((state) => state.login);

  const testOne = useSelector((state) => state.testOneFilter);
  const testTwo = useSelector((state) => state.testTwoFilter);

  const dispatch = useDispatch();

  const history = useHistory();

  const onPostTestRequest = async () => {
    const place = testOne.checked.reduce((acc, cur, idx) => {
      return cur ? [...acc, testOne.name[idx]] : acc;
    }, []);

    const concept = testTwo.checked.reduce((acc, cur, idx) => {
      return cur ? [...acc, testTwo.name[idx]] : acc;
    }, []);

    if (place.length === 0 || concept.length === 0) {
      alert('선택하지 않은 항목이 있습니다.');
      return false;
    }

    if (!login) {
      alert('로그인 하신 뒤 이용해 주세요!');
      window.location.href = './login';
      return false;
    }

    if (login) {
      await dispatch(
        postTESTRequest({
          place,
          concept,
        })
      );
      if (window.confirm('검사를 완료했습니다.\n결과를 확인하시겠습니까?')) {
        return true;
      }
    }
  };

  return {
    TEST,
    TEST_loading,
    TEST_error,
    onPostTestRequest,
    login,
  };
}
