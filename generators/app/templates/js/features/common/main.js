/**
 *  Entrance of common service
 *
 *
 *  @author  <%= answers.username %>
 *  @date  <%= answers.date %>
 *
 */
import ui from './ui/main';
import header from './Header/header';

export default _.flatten([ui, header]);
