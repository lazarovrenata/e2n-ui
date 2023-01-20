import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colorPalette } from '../../theme/default';

export function Loading() {
  return (
    <div className="width-100 d-flex justify-content-center align-items-center">
      <FontAwesomeIcon
        spin={true}
        icon={faSpinner}
        size={'3x'}
        color={colorPalette.systemGray500}
      />
    </div>
  );
}
