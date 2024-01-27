import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const RunningPerformanceForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.runningPerformance?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="event"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Event
        </Label>

        <TextField
          name="event"
          defaultValue={props.runningPerformance?.event}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="event" className="rw-field-error" />

        <Label
          name="time"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Time
        </Label>

        <TextField
          name="time"
          defaultValue={props.runningPerformance?.time}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="time" className="rw-field-error" />

        <Label
          name="place"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Place
        </Label>

        <NumberField
          name="place"
          defaultValue={props.runningPerformance?.place}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="place" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default RunningPerformanceForm
