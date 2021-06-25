import { Input } from '@material-ui/core';
import React, { useState } from 'react';

import IntlMessages from '../../../helpers/IntlMessages';
import UploadPage from './UploadPage/UploadPage';

const ProductManager = ({ match }) => {
  const [showUploadComponent, setShowUploadComponent] = useState(false);

  return (
    <>
      <div className="row mb-5">
        <div className="col-md-3">
          <h3>My Product</h3>
        </div>
        <div className="col-md-6">
          <input
            className="form-control"
            name="searchKeyword"
            id="searchKeyword"
            placeholder="Search Assets"
          />
        </div>
        <div className="col-md-3">
          <div className="">
            {showUploadComponent ? (
              <UploadPage />
            ) : (
              <a
                className="btn btn-outline-primary btn-sm ml-2"
                target="_top"
                href="/app/asset-manager/upload-file"
              >
                <span className="simple-icon-cloud-upload glyph-icon"></span>
                <IntlMessages id="  Upload   " />
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductManager;
