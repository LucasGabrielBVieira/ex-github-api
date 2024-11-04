import './style.css'

type Props = {
  avatar_url: string;
  url: string;
  followers: string;
  location: string;
  name: string;
};

function PerfilSearch({ avatar_url, url, followers, location, name }: Props) {
  return (
    <>
      <div className="perfil-img">
        <img src={avatar_url} alt="Avatar" />
      </div>
      <div className="perfil-data">
        <h3>Informações</h3>
        <p><strong>Perfil:</strong> <a href={url} target='_blank'>{url}</a></p>
        <p><strong>Seguidores:</strong> {followers}</p>
        <p><strong>Localidade:</strong> {location}</p>
        <p><strong>Nome:</strong> {name}</p>
      </div>
    </>
  );
}

export default PerfilSearch;
