import { ViewConfig } from '@vaadin/hilla-file-router/types.js';
import { useForm } from '@vaadin/hilla-react-form';
import {
	HorizontalLayout,
	NumberField,
	VerticalLayout,
} from '@vaadin/react-components';
import { Button } from '@vaadin/react-components/Button.js';
import { TextField } from '@vaadin/react-components/TextField.js';
import UserModel from 'Frontend/generated/com/example/application/model/UserModel';
import { UserService } from 'Frontend/generated/endpoints.js';

export const config: ViewConfig = {
	menu: { order: 0, icon: 'line-awesome/svg/globe-solid.svg' },
	title: 'Hello Hilla',
};

export default function HelloHillaView() {
	const { model, submit, field, invalid, submitting } = useForm(UserModel, {
		onSubmit: async (user) => {
			await UserService.createAndRetrieveUser(user).then(() => {
				console.log('User created with success');
			});
		},
	});

	return (
		<>
			<VerticalLayout theme='spacing padding'>
				<TextField label='name' {...field(model.name)}></TextField>
				<NumberField label='age' {...field(model.age)}></NumberField>
			</VerticalLayout>
			<HorizontalLayout theme='spacing padding'>
				<Button
					theme='primary'
					onClick={submit}
					disabled={invalid || submitting}>
					Save
				</Button>
				<span
					className='label'
					style={{ visibility: submitting ? 'visible' : 'hidden' }}>
					submitting
				</span>
				<div
					className='spinner'
					style={{ visibility: submitting ? 'visible' : 'hidden' }}></div>
			</HorizontalLayout>
		</>
	);
}
