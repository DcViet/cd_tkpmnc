// import React from 'react';
// import { TouchableOpacity, TouchableOpacityProps, ImageSourcePropType } from 'react-native';
// import styled from 'styled-components/native';

// // Import hình ảnh của các loại xe
// import economy from '../../assets/glc-300.png';
// import luxury from '../../assets/glc-300.png';
// import family from '../../assets/glc-300.png';

// interface CarButtonProps extends TouchableOpacityProps {
//   text: 'economy' | 'luxury' | 'family';
//   active?: boolean;
// }

// const carType: Record<string, ImageSourcePropType> = {
//   economy,
//   luxury,
//   family,
// };

// const CarButton: React.FC<CarButtonProps> = ({ text, active = false, ...props }) => {
//   return (
//     <Container active={active} {...props}>
//       <CarImage source={carType[text]} />
//       <Title>{text}</Title>
//     </Container>
//   );
// };

// interface ContainerProps {
//   active: boolean;
// }

// const Container = styled(TouchableOpacity)<ContainerProps>`
//   background-color:  '#FFFFFF';
//   border-radius: 8px;
//   padding: 10px;
//   align-items: center;
//   justify-content: center;
//   shadow-color: #000;
//   shadow-offset: 0px 2px;
//   shadow-opacity: 0.25;
//   shadow-radius: 3.84px;
//   elevation: 5;
//   margin: 5px;
// `;

// const CarImage = styled.Image`
//   width: 50px;
//   height: 50px;
//   margin-bottom: 5px;
// `;

// const Title = styled.Text`
//   font-size: 16px;
//   font-weight: bold;
//   color: #333333;
// `;

// export default CarButton;

import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';

// Import images for car types
import economy from '../../assets/glc-300.png';
import luxury from '../../assets/glc-300.png';
import family from '../../assets/glc-300.png';

interface CarButtonProps extends TouchableOpacityProps {
  text: 'economy' | 'luxury' | 'family';
  active?: boolean;
}

const carType: Record<string, ImageSourcePropType> = {
  economy,
  luxury,
  family,
};

const CarButton: React.FC<CarButtonProps> = ({ text, active = false, ...props }) => {
  return (
    <Container active={active} {...props}>
      <CarImage source={carType[text]} />
      <Title active={active}>{text}</Title>
    </Container>
  );
};

interface ContainerProps {
  active: boolean;
}

const Container = styled(TouchableOpacity)<ContainerProps>`
  background-color: ${({ active }) => (active ? '#007BFF' : '#FFFFFF')};
  border: ${({ active }) => (active ? '2px solid #0056b3' : '2px solid #FFFFFF')};
  border-radius: 8px;
  padding: 15px;
  align-items: center;
  justify-content: center;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
  margin: 10px;
`;

const CarImage = styled.Image`
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
`;

interface TitleProps {
  active: boolean;
}

const Title = styled.Text<TitleProps>`
  font-size: 18px;
  font-weight: bold;
  color: ${({ active }) => (active ? '#FFFFFF' : '#333333')};
`;

export default CarButton;
