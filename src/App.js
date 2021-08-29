import './App.css';
import { Component } from 'react';
import ImageGallery from './components/ImageGallery';
import Searchbar from './components/Searchbar';
import Button from './components/Button';
import Loader from './components/Loader';
import Modal from './components/Modal';
import FetchFilmApi from './components/services/film-api';

class App extends Component {
  state = {
    request: '',
    pictures: [],
    showModal: false,
    bigImageUrl: '',
    status: 'loading',
    currPage: 1,
  };

  handleFormSubmit = request => {
    this.setState({ request, pictures: [], currPage: 1 });
  };

  fetchImages = () => {
    const { currPage, request } = this.state;

    this.setState({ isLoading: true });

    FetchFilmApi(request, currPage)
      .then(response => {
        const filteredData = response.data.hits.map(picture => {
          return {
            id: picture.id,
            webformatURL: picture.webformatURL,
            largeImageURL: picture.largeImageURL,
            tags: picture.tags,
          };
        });

        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...filteredData],
          currPage: prevState.currPage + 1,
        }));
      })
      .finally(() => {
        if (this.state.currPage > 2) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
        return this.setState({ loading: false });
      });
  };

  onImageClick = url => {
    this.setState({ bigImageUrl: url });
    this.toggleModal();
    this.setState({ status: 'loading' });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onImageLoaded = () => {
    this.setState({ status: 'loaded' });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.request !== this.state.request) {
      this.fetchImages();
    }
  }

  render() {
    const { pictures, showModal, loading, bigImageUrl, status } = this.state;

    const showButton = pictures.length > 0 && !loading;
    return (
      <>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            {status === 'loading' && <Loader />}
            <img src={bigImageUrl} alt="" onLoad={this.onImageLoaded} />
          </Modal>
        )}

        <Searchbar requestSubmit={this.handleFormSubmit} />
        <ImageGallery pictures={pictures} onClick={this.onImageClick} />
        {showButton && <Button onClick={this.fetchImages} loading={loading} />}
      </>
    );
  }
}

export default App;
