import {
    combineValidators,
    composeValidators,
    createValidator,
    isRequired,
} from 'revalidate';

export const dressValidate = combineValidators({
    name: isRequired({ message: 'Pole nazwa jest wymagane !' }),
    producer: isRequired({ message: 'Pole producent jest wymagane !' }),
    color: isRequired({ message: 'Pole kolor jest wymagane !' }),
    size: isRequired({ message: 'Pole rozmiar jest wymagane !' }),
    price: isRequired({ message: 'Pole cena jest wymagane !' }),
  });
  export const saleDressValidate = combineValidators({
    name: isRequired({ message: 'Pole nazwa jest wymagane !' }),
    producer: isRequired({ message: 'Pole producent jest wymagane !' }),
    color: isRequired({ message: 'Pole kolor jest wymagane !' }),
    size: isRequired({ message: 'Pole rozmiar jest wymagane !' }),
    bustSize: isRequired({ message: 'Pole biust jest wymagane !' }),
    waistSize: isRequired({ message: 'Pole talia jest wymagane !' }),
    hipsSize: isRequired({ message: 'Pole biodra jest wymagane !' }),
    heightSize: isRequired({ message: 'Pole wzrost jest wymagane !' }),
  });
  const emailFormatCheck = createValidator(
    message => value => {
      if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return message
      }
    },
    'Nieprawidłowy adres e-mail'
  )
  export const clientValidate = combineValidators({
    name: isRequired({ message: 'Pole imię jest wymagane !' }),
    surname: isRequired({ message: 'Pole nazwisko jest wymagane !' }),
    phoneNumber: isRequired({ message: 'Pole numer telefonu jest wymagane !' }),
    email: composeValidators(emailFormatCheck({ message: 'Pole email nie jest poprawnie wypełnione !'}),
    isRequired({message: 'Pole E-mail jest wymagane !'}))(),
    street: isRequired({ message: 'Pole ulica jest wymagane !' }),
    city: isRequired({ message: 'Pole miasto jest wymagane !' }),
  });
  export const loginValidate = combineValidators({
    username: isRequired({message: 'Pole Login jest wymagane !'}),
    password: isRequired({message: 'Pole Hasło jest wymagane !'}),
  });
  export const saleOrder = combineValidators({
    totalPrice: isRequired({ message: 'Pole nazwisko jest wymagane !' }),
    deposit: isRequired({ message: 'Pole numer telefonu jest wymagane !' }),
    weddingDate: isRequired({ message: 'Pole numer telefonu jest wymagane !' }),
    realizationDateStart: isRequired({ message: 'Pole numer telefonu jest wymagane !' }),
    realizationDateEnd: isRequired({ message: 'Pole numer telefonu jest wymagane !' }),
    realizationDeadLine: isRequired({ message: 'Pole numer telefonu jest wymagane !' }),
  });
  export const rentOrder = combineValidators({
    totalPrice: isRequired({ message: 'Pole nazwisko jest wymagane !' }),
    deposit: isRequired({ message: 'Pole numer telefonu jest wymagane !' }),
    weddingDate: isRequired({ message: 'Pole numer telefonu jest wymagane !' }),
    rentStartDate: isRequired({ message: 'Pole numer telefonu jest wymagane !' }),
    rentEndDate: isRequired({ message: 'Pole numer telefonu jest wymagane !' }),
  });