import {
  Form,
  Input,
  Checkbox as AntCheckbox,
  Select as AntSelect,
  Button
} from 'antd'

export { Form } from 'antd'

export function Text ({ label, name, required, rules = [], ...props }) {
  return (
    <Form.Item label={label} name={name} rules={[{ required }, ...rules]}>
      <Input {...props} />
    </Form.Item>
  )
}

export function Checkbox ({ name, children }) {
  return (
    <Form.Item name={name} valuePropName='checked'>
      <AntCheckbox>{children}</AntCheckbox>
    </Form.Item>
  )
}

export function Select ({
  name,
  label,
  required,
  rules = [],
  options = [],
  ...props
}) {
  return (
    <Form.Item name={name} label={label} rules={[{ required }]}>
      <AntSelect allowClear {...props}>
        {options.map(({ value, name }) => (
          <AntSelect.Option key={value} value={value}>
            {name}
          </AntSelect.Option>
        ))}
      </AntSelect>
    </Form.Item>
  )
}

export function Submit ({ label = 'ذخیره', loading }) {
  return (
    <Form.Item>
      <Button
        type='primary'
        htmlType='submit'
        loading={loading}
        disabled={loading}
      >
        {label}
      </Button>
    </Form.Item>
  )
}
