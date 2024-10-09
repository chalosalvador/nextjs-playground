'use client';

// import styled from 'styled-components';

const containerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: '1.5rem',
};

const skeletonInnerStyle = {
  padding: '1rem',
  backgroundColor: 'rgba(24, 24, 27, 0.8)',
  borderRadius: '1rem',
};

const skeletonImgStyle = {
  height: '3.5rem',
  borderRadius: '0.5rem',
  backgroundColor: 'rgb(63, 63, 70)',
};

const skeletonBtnStyle = {
  marginTop: '0.75rem',
  width: '25%',
  height: '0.75rem',
  borderRadius: '0.5rem',
  backgroundColor: 'rgb(255, 0, 128)',
};

const skeletonLineOneStyle = {
  marginTop: '0.75rem',
  height: '0.75rem',
  width: '91.666667%',
  borderRadius: '0.5rem',
  backgroundColor: 'rgb(63, 63, 70)',
};

const skeletonLineTwoStyle = {
  marginTop: '0.75rem',
  height: '0.75rem',
  width: '66.666667%',
  borderRadius: '0.5rem',
  backgroundColor: 'rgb(63, 63, 70)',
};

const Skeleton = () => (
  <div style={skeletonInnerStyle}>
    <div style={skeletonImgStyle} />
    <div style={skeletonBtnStyle} />
    <div style={skeletonLineOneStyle} />
    <div style={skeletonLineTwoStyle} />
  </div>
);

export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">
        Styled with Inline Styles
      </h1>
      <div style={containerStyle}>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    </div>
  );
}
