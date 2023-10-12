import React from 'react';
import { EntityContext } from '../EntityContext';
import Select from 'react-select';
import { useForm } from "react-hook-form";

const options = [
  { value: '1', label: 'Persona Física Mexicana' },
  { value: '2', label: 'Persona Moral Mexicana' },
  { value: '3', label: 'Persona Moral Extranjera' },
  { value: '4', label: 'Persona Física Extranjera' },
  { value: '5', label: 'Fideicomiso' },
  { value: '6', label: 'Persona del Derecho Público' }
]

function EntityForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    addEntity,
    setOpenModal,
    editEntity,
    showEntity: entity
  } = React.useContext(EntityContext);

  const [selectedOption, setSelectedOption] = React.useState( entity === undefined ? options[0] : options[entity.regime] );

  const onSubmit = (data) => {
    data.regime = parseInt(selectedOption.value - 1);
    if(entity === undefined){ 
      addEntity(data);
    }else{
      data.id = entity.id;
      editEntity(data);
    }
    setOpenModal(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="inputEmail4">Regime</label>
            <Select 
            options={options}
            defaultValue={ entity === undefined ? options[0] : options[entity.regime] }
            onChange={setSelectedOption}
            />
          </div><br/>
          <div className="form-group">
            <label htmlFor="name">RFC</label>
            <input className="form-control" defaultValue={ entity?.rfc ?? '' } {...register("rfc", { 
              required: "Phone is required.",
              maxLength: {
                value: 13,
                message: 'Name cannot exceed 13 characters'
              },
              minLength:{
                value: 8,
                message: 'Name need a minimum of 8 characters'
              } })} />
            <small id="emailHelp" className="form-text text-muted">
            {errors?.rfc && <p className="errorMsg text-danger text-muted">{errors?.rfc?.message}</p>}
            </small>
          </div><br/>

          <div className="form-group">
                <label htmlFor="name">{(selectedOption.value === '1' || selectedOption.value === '4') ? 'Name' : 'Business Name' }</label>
                <input className="form-control" defaultValue={ entity?.name ?? ''} {...register("name", { 
                  required: "Name is required.",
                  maxLength: {
                    value: 40,
                    message: 'Name cannot exceed 40 characters'
                  },
                  minLength:{
                    value: 8,
                    message: 'Name need a minimum of 8 characters'
                  }
                 })} />
                <small id="emailHelp" className="form-text text-muted">
                {errors?.name && <p className="errorMsg text-danger text-muted">{errors?.name?.message}</p>}
                </small>
          </div> <br/>

          { (selectedOption.value === '1' || selectedOption.value === '4') ?
          <>
            <div className="form-group">
                <label htmlFor="name">Curp</label>
                <input className="form-control" defaultValue={ entity?.curp ??  ''} {...register("curp", { 
                  required: "Curp is required",
                  maxLength: {
                    value: 20,
                    message: 'Curp cannot exceed 20 characters'
                  },
                  minLength:{
                    value: 13,
                    message: 'Curp need a minimum of 13 characters'
                  }
                 })} />
                <small id="emailHelp" className="form-text text-muted">
                {errors.curp && <p className="errorMsg text-danger text-muted">{errors?.curp?.message}</p>}
                </small>
            </div> <br/>
          </>
          : ''
          }
          { selectedOption.value === '5' ?
          <>
            <div className="form-group">
                <label htmlFor="name">Número de Fideicomiso</label>
                <input className="form-control" defaultValue={ entity?.fiel ?? ''} {...register("fiel", { 
                  required: "Fiel is required",
                  maxLength: {
                    value: 40,
                    message: 'Fiel cannot exceed 40 characters'
                  },
                  minLength:{
                    value: 8,
                    message: 'Fiel need a minimum of 8 characters'
                  }
                 })} />
                <small id="emailHelp" className="form-text text-muted">
                {errors.fiel && <p className="errorMsg text-danger text-muted">{errors?.fiel?.message}</p>}
                </small>
            </div><br/>
          </>
          : ''
          }

              <div className="form-group">
                <label htmlFor="name">Correo Electrónico</label>
                <input className="form-control" defaultValue={ entity?.email ?? ''} 
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      message: "Email is not valid."
                  },
                  maxLength: {
                    value: 40,
                    message: 'Email cannot exceed 40 characters'
                  },
                  minLength:{
                    value: 8,
                    message: 'Email need a minimum of 8 characters'
                  }
              })} />
              <small id="emailHelp" className="form-text text-muted">
              {errors.email && <p className="errorMsg text-danger text-muted">{errors?.email?.message}</p>}
                </small>
                
              </div><br/>

            <div className="form-group">
                <label htmlFor="name">Telefono</label>
                <input className="form-control" defaultValue={ entity?.phone ?? ''} {...register("phone", { 
                  required: "Phone is required.",
                  maxLength: {
                    value: 13,
                    message: 'Phone cannot exceed 13 characters'
                  },
                  minLength:{
                    value: 8,
                    message: 'Phone need a minimum of 8 characters'
                  }
                 })} />
                 <small id="emailHelp" className="form-text text-muted">
                 {errors?.phone && <p className="errorMsg text-danger text-muted">{errors?.phone?.message}</p>}
                </small>
                
            </div><br/>
          
        </div>
        <button type="button" 
        className="btn btn-secondary col-md-6"
        onClick={ () => {
          setOpenModal(false);
        } }>Close</button>
        <input type="submit" className='btn btn-primary col-md-6' />
    </form>
  );
}

export { EntityForm };
